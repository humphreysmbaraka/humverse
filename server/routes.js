const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {GridFSBucket, ObjectId, Timestamp} = require('mongodb');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const fs = require('fs')
const  pdfParse = require('pdf-parse')

const User = require('./configs/schemas/user');
const Request = require('./configs/schemas/request');
const Ai = require('./configs/schemas/AI');
const ai = require('./configs/openAi');
const index = require('./configs/pineconedb');
const Query = require('./configs/schemas/queries');
const Transaction = require('./configs/schemas/transaction');
const { Readable } = require('stream');
// const humverseindex = require('./configs/pineconedb');
// const  pineconedb  = require('./configs/pineconedb');
// console.log('TYPE OF INDEX' , index , typeof(index));

// user token generator;

const createusertoken = async function(id){
  try{
    const token =  jwt.sign({id} , process.env.USER_TOKEN_SIGN , {expiresIn: '40m'});
    console.log('token created')
    return token;

  }
  catch(err){
    console.log('error generating user token' , err);
    
  }
}





const verifytoken = async function(req , res , next){
   
  try{
    const token = req.cookies[process.env.COOKIE_NAME];
    if(token){
      const decode =  jwt.verify(token , process.env.USER_TOKEN_SIGN);
      if (decode){
        const user = await User.findOne({_id:decode.id});
        // return res.status(200).json({error:false , loggedin:true});
        if(user){
          req.user = user;
          next();
        }
        else{
          return res.status(400).json({error:true , loggedin:false})

        }
      

      }
      else{
        return res.status(400).json({error:true , loggedin:false})
      }
    }
    else{
      return res.status(400).json({error:true , loggedin:false})
    }
   
   
  }
  catch(err){
    console.log('error verifying user token' , err);
    return res.status(400).json({error:true , message:'error cerifying token' , error:err})
  }
}

// const createusertoken = async function(id){
//   try{
//      jwt.sign(id , process.env.USER_TOKEN_SIGN , {})
//   }
//   catch(err){
//     console.log('error generating user token' , err);
//   }
// }


const conn =  mongoose.createConnection(process.env.ATLAS_CONNECTION_STRING);
let requestbucket;
let profilepicturesbucket;
let aidocsbucket;
let previewbucket;

conn.once('open' , function(){
  requestbucket = new GridFSBucket(conn.db , {
    bucketName:'request attachments',
    chunkSizeBytes:1048576
  });


  profilepicturesbucket = new GridFSBucket(conn.db , {
    bucketName:'profile_pictures',
    chunkSizeBytes:1048576
  });

  aidocsbucket = new GridFSBucket(conn.db , {
    bucketName:'assistant_docs',
    chunkSizeBytes:1048576
  })


  previewbucket = new GridFSBucket(conn.db , {
    bucketName:'previews',
    chunkSizeBytes:1048576
  })
})


const temporary_diskstorage = multer.diskStorage({
  destination :  function(req , file , cd){
    cd(null ,'./uploads' );
  },
  filename : function(req , file , cb){
   cb(null , file.originalname);
  }
})


const ai_docs_storage = multer.diskStorage({
  destination :  function(req , file , cd){
    cd(null ,'./ai_docs' );
  },
  filename : function(req , file , cb){
   cb(null , file.originalname);
  }
})

const memstore = multer.memoryStorage();


const hhybid_multer_storage =   {
  _handleFile(req , file , cb){
    if (file.fieldname == 'docs_disk'){
      temporary_diskstorage._handleFile(req , file , cb);
    }
    else if(file.fieldname == 'docs'){
      const chunks = [];
      file.stream.on('data' , function(chunk){
        chunks.push(chunk);
      })
      file.stream.on('end' ,function(){
        const buffer = Buffer.concat(chunks);
        cb(null, {
          buffer,
          size: buffer.length,
          originalname: file.originalname,
          mimetype: file.mimetype,
          encoding: file.encoding,
          fieldname: file.fieldname
        })
      })
      file.stream.on('error' , function(err){
        cb(err);
      })
    }
    else{
      cb(new Error('Unexpected field: ' + file.fieldname));
    }
  }
}

const file_uploader = multer({storage:temporary_diskstorage});
const ai_doc_uploader = multer({storage:ai_docs_storage});
const memstorage = multer({storage:memstore});
const hybrid_file_uploader = multer({storage:hhybid_multer_storage});

const app = express();
app.use(express.json());
const router = express.Router();








// TO CHECK MULTER MIDDLEWEAR ERRORS


app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Example: file too big
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error:true , message: "File too large!" });
    }
    return res.status(400).json({ error:true , message: err.message });
  }

  // Any other error
  res.status(500).json({ error:true , message: "Something went wrong" });
});


router.post('/sign_up' , memstorage.single('picture') ,   async function(req , res){
  try{
    console.log('signing you up' , req.body , req.file);
  const {username , email , password} = req.body;
  const admin = username.startsWith(process.env.ADMIN_STRING);
  const profilepic = req.file;
  const userexists = await User.findOne({email:req.body.email});
  if(userexists){
    console.log('user already exists');
    return res.status(409).json({error:true , message:'the email you entered already exists'});

  }
  else{    
    if(profilepic){
      const upload = new Promise(function(resolve , reject){
        const name = profilepic.originalname;
        // const path = profilepic.path;
        const type = profilepic.mimetype;
        const size = profilepic.size;

        const readstream = Readable.from(profilepic.buffer);
        const uploadstream = profilepicturesbucket.openUploadStream(name , {
          metadata:{
            size , type
          }
        });
        readstream.pipe(uploadstream);

        uploadstream.on('finish' ,async  function(){
          resolve(uploadstream.id);
           
        })
        uploadstream.on('error' , function(err){
          reject(err);
         
        })
      
      })

      const picupload = await upload;
      const hashed =  await bcrypt.hash(password , 10);
      const newuser = new User({
        username:admin?username.slice(20):username , admin:admin ,  email , password:hashed , picture:picupload
      });
    
      await newuser.save();
      const usertoken = await createusertoken(newuser._id);
      res.cookie(process.env.COOKIE_NAME  , usertoken , {
        httpOnly: true,
        secure:true,
        sameSite: 'None',
        maxAge: 3600000*5
      })
      return res.status(200).json({error:false , message:'account created successfully' , user:newuser});
       
    }


else{
  const hashed =  await bcrypt.hash(password , 10);

  const newuser = new User({
    username:admin?username.slice(20):username , email , password:hashed ,admin:admin
  });

  await newuser.save();
  const usertoken = await createusertoken(newuser._id);
  res.cookie(process.env.COOKIE_NAME  , usertoken , {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 3600000*5
  })
  return res.status(200).json({error:false , message:'account created successfully' , user:newuser});
}
    
  }
  }
  catch(err){
    console.log('error creating an account' , err);
    return res.status(500).json({error:true , message:err});
  }
})






router.post('/log_in' , async function(req , res){
  try{
     const {email , password} = req.body;
     console.log(req.body)
     const userexists = await User.findOne({email:email});
     if(userexists){
      const passwordcheck = await bcrypt.compare(password , userexists.password);
      if (!passwordcheck) {
        return res.status(400).json({ error: true, message: 'Incorrect password' });
      }
      else{
        const token = await createusertoken(userexists._id);
    
        res.cookie(process.env.COOKIE_NAME , token , {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
          maxAge: 3600000*5
        })
   
      console.log('successfully logged in');
      return res.status(200).json({error:false , message:'logged in successfully' , user:userexists});
      }
      
     }
     else{
      console.log('user does not exist');
      return res.status(400).json({error:true , message:'user does not exist'});
     }
  }
  catch(err){
    console.log('error logging in' , err);
    return res.status(500).json({error:true , message:err});

  }
})




router.get('/profile_pic/:pic_id' , async function(req , res){
  try{
     const pic_id = new ObjectId(req.params.pic_id);
    console.log('id' , pic_id);
     const imagefile = await  profilepicturesbucket.find({_id:pic_id}).toArray();
     console.log('imegefile(s)' , imagefile);
     if(imagefile.length > 0){
      file  = imagefile[0];
      console.log('image found'  , file)
      res.set('Content-Type', file.metadata?.type || 'image/jpeg'  );

      const downloadstream = await profilepicturesbucket.openDownloadStream(file._id);
      downloadstream.pipe(res);
      downloadstream.on('error' , function(err){
       console.log('error streaming profile picture' , err);
       return res.status(500).json({error:true , error:err , message:'error streaming profile picture'});
      })
     }
     else{
      console.log('image not found')
      return res.status(404).json({error:true  , message:'user has no profile picture'});

     }
   
  }
  catch(err){
    console.log('error fetching profile picture' , err);
    return res.status(500).json({error:true , error:err , message:'error streaming profile picture'});


  }
})




router.post('/send_request' , memstorage.array('attachments' , 20) ,  async function(req , res){
  try{
  console.log('request received' , req.body , req.files);
  const {type , description , timeunit , timequantity , names , number , email , user} = req.body;
  const files = req.files;
  // let attachment_ids = []
  const sender = await User.findOne({_id:user});
  if(sender){
  

    if(files?.length > 0){
      const attachments_upload = await files.map(function(val , index){
         return (
          new Promise(function(resolve , reject){
  
            // const path = val.path;
            const name = val.originalname;
            const type = val.mimetype;
            const size = val.size;
    
            const readstream = Readable.from(val.buffer);
            const uploadstream = requestbucket.openUploadStream(name , {
              metadata : {
                name , type , size 
              }
            });
    
            readstream.pipe(uploadstream);
    
            uploadstream.on('finish' , function(){
              resolve( uploadstream.id);
  
            
            })
  
            uploadstream.on('error' , function(err){
              reject(err);
              
              
            })
  
          })        
         )
      })
  
      const attachment_ids = await Promise.all(attachments_upload);
      const newrequest = new Request({
        client:user ,  type , description , timeunit , timequantity , names , number , email , attachments:[...attachment_ids]
      })
  
      await newrequest.save();
      await sender.requests.push(newrequest._id);
      await sender.save();
      return res.status(200).json({error:false , request:newrequest});
      // include saving therequest's id in the user's requests
  
    }
    else{
      const newrequest = new Request({
        client:user ,  type , description , timeunit , timequantity , names , number , email 
      })
  
      await newrequest.save();
      await sender.requests.push(newrequest._id);
      await sender.save();
      return res.status(200).json({error:false});
  
    }


  }
  else{
    console.log('user unidentified');
    return res.status(401).json({error:true , message:'user unidentified' })
  }

  }
  catch(err){
    console.log('error processing request' , err);
    return res.status(500).json({error:true , message:err});
  }
})














router.post('/check_loggedin' , async function(req , res){
  try{
    console.log('checking auth status');
     const token = req.cookies[process.env.COOKIE_NAME];
     if(token){
        const decode =   jwt.verify(token , process.env.USER_TOKEN_SIGN);
        if(decode){
          const user = await User.findOne({_id:decode.id});
          if(user){
            console.log('token user extracted')
            return res.status(200).json({error:false , message:'token valid' , user:user});
          }
          else{
            return res.status(401).json({error:true , message:'token invalid:user not found'});
          }
        }
        else{
          console.log('error decoding token');
          return res.status(401).json({error:true , message:'token invalid'});
        }
     }
     else{
      console.log('no token found');
      return res.status(401).json({error:true , message:'no token found'});
     }
  }
  catch(err){
    console.log('error checking logged in status' , err);
    return res.status(500).json({error:true , message:err});
  }
})














router.get('/platform_data' , async function(req , res){
  try{
    const result = {}
     const db = mongoose.connection.db;
     const collections = await  db.listCollections().toArray();

    //  for(let collection of collections){
    //   const colname = collection.name;
    //    const documents = await db.collection(colname).find({}).toArray();
    //    data[colname] = documents;
    //  }
     
     const documents = await collections.map(function(val , index){
          return new Promise(async function(resolve , reject){
                const name = val.name;
                try{
                  const documents = await db.collection(name).find({}).toArray();
                  resolve(documents);
                }
                catch(err){
                  resolve(err);
                }
                }
                
                 
        )
     })

     const alldocuments = await Promise.all(documents);
      collections.forEach(function(val , index){
         result[val.name] = alldocuments[index]
      })

      return res.status(200).json({error:false , message:'data fetched successfully' , data:result})
  
  }
  catch(err){
    console.log('error fetching platform data' , err);
    return res.status(500).json({error:true , message:err});
  }
})



router.post('/logout' , async function(req , res){
  try{
    console.log('logging out...')
      const token = req.cookies[process.env.COOKIE_NAME];
      if(token){
        console.log('found token');

        res.cookie(process.env.COOKIE_NAME, '', {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
          maxAge:0
         
        });
        console.log('successfully logged out');
        return res.status(200).json({error:false , message:'logged out successfully'});
        
      }
      else{
        console.log('could not find token');
        return res.status(400).json({error:true , message:'could not find token'});

      }
  }
  catch(err){
    console.log('error logging out' , err);
    return res.status(500).json({error:true , message:'error logging out' , error:err})
  }
})





router.get('/fetch_homedata/:id' , async function(req , res){
    try{
      console.log('gettting user info');
      const id = req.params.id
       const user = await User.findOne({_id:id}).populate('requests');
       if(user){
          console.log(user);
          return res.status(200).json({error:false , message:'user_found' , data:user})
       }
       else{
        console.log('user unidentified');
        return res.status(400).json({error:true , message:'user unidentified'});
       }
    }
    catch(err){
      console.log('error fetching user home data' , err);
      return res.status(500).json({error:true , mesage:'server error'})
    }
})





router.get('/get_requests' , async function(req , res){
  try{
      console.log('fetching requests...');
      const requests = await Request.find({}).populate('client');
      if(requests.length > 0){
        console.log('found requests' , requests);
        return res.status(200).json({error:false , requests:requests , message:'fetched requests'});
      }
      else{
        console.log('no requests found' , requests);
        return res.status(200).json({error:false , requests:requests , message:'no requests found'});
      }
  }
  catch(err){
    console.log('error fetching requests' , err);
    return res.status(500).json({error:true , message:'server error' , error:err})
  }
})


router.get('/fetch_request/:id' , async function(req , res){
  try{
   const id = req.params.id;
   console.log('fetching request');
   const request = await Request.findOne({_id:id});
   if(!request){
    console.log('no such request found');
    return res.status(400).json({error:true , message:'no such request found'});
   }
   else{
     console.log('request found');
     return res.status(200).json({error:false , request:request})
   }
  }
  catch(err){
    console.log('error during fetching request' , err);
    return res.status(500).json({error:true , message:'internal server error' , error:err})
  }
})


router.patch('/accept_request'  , async function(req , res){
    try{
      console.log('PROCESSING ACCEPTANCE........')
       const {makingcost , deploymentcost , hostingcost , currency , maintainance ,reqid , domaincost } = req.body;
       const request = await Request.findOne({_id:reqid});
       if(request){
        request.received = true;
        request.accepted = true;
        request.rejected = false;
        request.initiated = false;
        request.cancelled = false;
        request.payments.payments_required.making_cost = Number(makingcost);
        request.payments.payments_required.deploying_cost = Number(deploymentcost);
        request.payments.payments_required.domain_name_cost = Number(domaincost);
        request.payments.payments_required.hosting_cost = Number(hostingcost);
        request.payments.payments_required.maintainance_cost = Number(maintainance);
        request.payments.currency = currency;
        request.payments.total_payment_required = (Number(makingcost)+Number(deploymentcost) + Number(domaincost) +Number(hostingcost)+Number(maintainance));
        request.payments.deposit_required =  Math.ceil(( (Number(makingcost)+Number(deploymentcost) + Number(domaincost) +Number(hostingcost)+Number(maintainance))/3));
        request.payments.total_paid = 0;
        request.payments.amount_remaining = request.payments.total_payment_required;
        await request.save();
        console.log('reques accepted successfully' , request);
        return res.status(200).json({error:false , message:'request accepted successfully' , request});


       }
       else{
        console.log('no such request found');
        return res.status(400).json({error:true , message:'no such request found'})
       }
     
    }
    catch(err){
      console.log('error accepting request' , err);
      return res.status(500).json({error:true , message:'server error' , error:err});
    }
})


router.patch('/edit_accepted_request'  , async function(req , res){
  try{
    console.log('PROCESSING CHANGES........')
     const {makingcost , deploymentcost , hostingcost , currency , maintainance ,reqid , domaincost } = req.body;
     const request = await Request.findOne({_id:reqid});
     if(request){
       if(request.cancelled){
        return res.status(400).json({error:true , message:'request was cancelled'})

       }
      request.received = true;
      request.accepted = true;
      request.rejected = false;
      
      request.initiated = request.initiated;
      request.cancelled = false;
      request.payments.payments_required.making_cost = Number(makingcost);
      request.payments.payments_required.deploying_cost = Number(deploymentcost);
      request.payments.payments_required.domain_name_cost = Number(domaincost);
      request.payments.payments_required.hosting_cost = Number(hostingcost);
      request.payments.payments_required.maintainance_cost = Number(maintainance);
      request.payments.currency = currency;
      request.payments.total_payment_required = (Number(makingcost)+Number(deploymentcost) + Number(domaincost) +Number(hostingcost)+Number(maintainance));
      request.payments.deposit_required =  Math.ceil(( (Number(makingcost)+Number(deploymentcost) + Number(domaincost) +Number(hostingcost)+Number(maintainance))/3));
      request.payments.total_paid =request.payments.total_paid ;
      request.payments.amount_remaining = (Number(request.payments.total_payment_required)-(Number(request.payments.total_paid)));
      await request.save();
      console.log('request editted successfully' , request);
      return res.status(200).json({error:false , message:'request editted successfully' , request});


     }
     else{
      console.log('no such request found');
      return res.status(400).json({error:true , message:'no such request found'})
     }
   
  }
  catch(err){
    console.log('error editting request' , err);
    return res.status(500).json({error:true , message:'server error' , error:err});
  }
})


router.patch('/reject_request' , async function(req , res){
  try{
    const {reqid} = req.body;
    console.log('rejecting' , reqid);
    const request = await Request.findOne({_id:reqid});
    if(request){
       request.rejected=true;
      //  request.accepted=false;

       await request.save();
       return res.status(200).json({error:false , message:'request rejected successfully' , request});
    }
    else{
      console.log('no such request found');
      return res.status(400).json({error:true , message:'no such request found'})
    }
  }
  catch(err){
    console.log('error when rejecting request' , err);
    return res.status(500).json({error:true , message:'server error' , error:err});
  }
})




router.patch('/redeem_request' , async function(req , res){
  try{
    const {reqid} = req.body;
    console.log('redeeming' , reqid);
    const request = await Request.findOne({_id:reqid});
    if(request){
       request.rejected=false;
      //  request.accepted=false;

       await request.save();
       return res.status(200).json({error:false , message:'request redeemed successfully' , request:request});
    }
    else{
      console.log('no such request found');
      return res.status(400).json({error:true , message:'no such request found'})
    }
  }
  catch(err){
    console.log('error when redeeming request' , err);
    return res.status(500).json({error:true , message:'server error' , error:err});
  }
})



router.post('/cancel_request' , async function(req , res){
  try{

  console.log('cancelling request');
  
  const {id} = req.body;
  const request = await Request.findOne({_id:id});
  if(!request){
    console.log('no such request found');
    return res.status(400).json({error:true , message:'no such request found'});
  }
  
  else{
    if(request.rejected){
      return res.status(400).json({error:true , message:'request is already rejected'});

    }
    request.cancelled = true;
    await request.save();
    console.log('request cancelled succesfully');
    return res.status(200).json({error:false , message:'request cancelled successfully' , request});
  }
   
  }
  catch(err){
    console.log('error cancelling request' , err);
    return res.status(500).json({error:true , message:'internal server error' , problem:err})
  }
})


router.post('/uncancel_request' , async function(req , res){
  try{
  console.log('uncancelling request');
  const {id} = req.body;
  const request = await Request.findOne({_id:id});
  if(!request){
    console.log('no such request found');
    return res.status(400).json({error:true , message:'no such request found'});
  }
  else{
    request.cancelled = false;
    await request.save();
    console.log('request uncancelled succesfully');
    return res.status(200).json({error:false , message:'request uncancelled successfully' ,request});
  }
   
  }
  catch(err){
    console.log('error uncancelling request' , err);
    return res.status(500).json({error:true , message:'internal server error' , problem:err})
  }
})



router.post('/pay_for_product' , async function(req , res){
  const {phonenumber , amount , product_id , user_id} = req.body;
  let number;
  if(phonenumber.startsWith('07')){
    if(phonenumber.startsWith('070')  ||  phonenumber.startsWith('071') || phonenumber.startsWith('072')|| phonenumber.startsWith('074')  || phonenumber.startsWith('0757')  || phonenumber.startsWith('0758') || phonenumber.startsWith('0759')  || phonenumber.startsWith('079')){
      console.log('payment details' , req.body);
      const consumerkey = process.env.CONSUMER_KEY.trim();
      const consumersecret = process.env.CONSUMER_SECRET.trim();
      const shortcode = process.env.SHORTCODE;
      const passkey = process.env.PASSKEY.trim();
      const callbackurl = process.env.CALLBACK_URL.trim();
      const timestamp = new Date().toISOString().replace(/[^0-9]/g , '').slice(0,14);
      const authkey = new Buffer.from(`${consumerkey}:${consumersecret}`).toString('base64');
      const password = new Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');
      const cleanednumber = `254${phonenumber.substring(1)}`
      console.log('phonenumber' , cleanednumber);
      number = cleanednumber;

      try{
        const request = await Request.findOne({_id:product_id});
        const user = await User.findOne({_id:user_id});
        if(!request || !user){
          console.log('could not find such request/user in database');
          return res.status(400).json({error:true , message:"either request or user does not exist"});
        }
           console.log('fetching auth token');
           const authtoken = await fetch(`${process.env.SANDBOX_AUTH_URL}` , {
            headers: {
              'Authorization' : `Basic ${authkey}`,
              'Content-Type' : 'application/json'
            },
            method:'GET'
           })
    
           if(authtoken.ok){
            const tokeninfo = await authtoken.json();
            const token = tokeninfo.access_token;
            console.log('auth token successfully retrieved' , tokeninfo , token);
    
            
    
            const stkpayload = {
              BusinessShortCode:shortcode,
              Password:password,
              Timestamp:timestamp,
              TransactionType : 'CustomerPayBillOnline',
              Amount :amount,
              PartyA:number,
              PartyB:shortcode,
              PhoneNumber:number,
              CallBackURL:callbackurl,
              AccountReference :process.env.ACCOUNT_REF,
              TransactionDesc:'joinin'
    
            }
    
            const response = await fetch(process.env.SANDBOX_LNM_URL.trim() , {
              headers:{
                'Authorization' : `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              
              method:'POST',
              body:JSON.stringify(stkpayload)
            });
    
            console.log('sending payload' , JSON.stringify(stkpayload));
            
            if(response.ok){
              console.log('stk pushed successfully');
              const responseinfo = await response.json();
              // const request = await Request.findOne({_id:product_id});
              // if(request){
                // const newtransaction = new Transaction({
                //   user:user_id , product:product_id , merchantrequest_id:responseinfo.MerchantRequestID ,  checkoutrequest_id :responseinfo.CheckoutRequestID
                // })
                // await newtransaction.save();
                // request.payments.payment_info.transaction = newtransaction._id;
                request.payments.payment_info.merchantrequest_ids.push(responseinfo.MerchantRequestID);
                request.payments.payment_info.checkoutrequest_ids.push(responseinfo.CheckoutRequestID);
                // request.payments.total_paid = request.payments.total_paid + Number(amount);
                // request.payments.amount_remaining = (request.payments.total_payment_required - (Number(amount)+request.payments.total_paid));
                // if((request.payments.total_payment_required - (Number(amount)+request.payments.total_paid)) <= 0 ){
                //   request.payments.status = 'fully paid'
                // }
                // else{
                //   request.payments.status = 'not fully paid'
                // }
                
                await request.save();
                return res.status(200).json({error:false , message:'stk pushed successfully' , info:responseinfo});
              // }
              // else{
              //   console.log('no such request found in the database');
              //   return res.status(400).json({error:true , message:'no such request found in the database'})
              // }

              // return res.status(200).json({error:false , message:'stk pushed successfully' , info:responseinfo});
            }
            else{
              console.log('failed to  push stk');
              const responseinfo = await response.json();
              console.log(response , responseinfo);
              return res.status(500).json({error:true , message:'error pushing stk' })
            }
    
           }
           else{
            console.log('error getting auth token (from auth URL)');
            return res.status(500).json({error:true , message:'server error getting auth token' , error:err});
           }
      }
      catch(err){
        console.log('error processing payment' , err);
        return res.status(500).json({error:true , message:'server error getting auth token' , error:err});
      }
    }
   
    else{
      return res.status(400).json({error:true , message:'you entered an invalid  number'})

    }
  }
  else if(phonenumber.startsWith('254')){
    if(phonenumber.startsWith('25470')  ||  phonenumber.startsWith('25471') || phonenumber.startsWith('25472')|| phonenumber.startsWith('25474')  || phonenumber.startsWith('254757')  || phonenumber.startsWith('254758') || phonenumber.startsWith('254759')  || phonenumber.startsWith('25479')){
      console.log('payment details' , req.body);
      const consumerkey = process.env.CONSUMER_KEY;
      const consumersecret = process.env.CONSUMER_SECRET;
      const shortcode = process.env.SHORTCODE;
      const passkey = process.env.PASSKEY;
      const callbackurl = process.env.CALLBACK_URL;
      const timestamp = new Date().toISOString().replace(/[^0-9]/g , '').slice(0,14);
      const authkey = new Buffer.from(`${consumerkey}:${consumersecret}`).toString('base64');
      const password = new Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');
      // const cleanednumber = `254${phonenumber.substring(2)}`
      // console.log('phonenumber' , cleanednumber);
      // number = cleanednumber;

      try{
        const request = await Request.findOne({_id:product_id});
        const user = await User.findOne({_id:user_id});
        if(!request || !user){
          console.log('could not find such request/user in database');
          return res.status(400).json({error:true , message:"either request or user does not exist"});
        }
           console.log('fetching auth token');
           const authtoken = await fetch(`${process.env.SANDBOX_AUTH_URL.trim()}` , {
            headers: {
              'Authorization' : `Basic ${authkey}`,
              'Content-Type' : 'application/json'
            },
            method:'GET'
           })
    
           if(authtoken.ok){
            const tokeninfo = await authtoken.json();
            const token = tokeninfo.access_token;
            console.log('auth token successfully retrieved' , tokeninfo , token);
    
            
    
            const stkpayload = {
              BusinessShortCode:shortcode,
              Password:password,
              Timestamp:timestamp,
              TransactionType : 'CustomerPayBillOnline',
              Amount :amount,
              PartyA:phonenumber,
              PartyB:shortcode,
              PhoneNumber:phonenumber,
              CallBackURL:callbackurl,
              AccountReference :process.env.ACCOUNT_REF,
              TransactionDesc:'joinin'
    
            }
    
            const response = await fetch(process.env.SANDBOX_LNM_URL , {
              headers:{
                'Authorization' : `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              
              method:'POST',
              body:JSON.stringify(stkpayload)
            });
    
            console.log('sending payload' , JSON.stringify(stkpayload));
            
            if(response.ok){
              console.log('stk pushed successfully');
              const responseinfo = await response.json();
              // const request = await Request.findOne({_id:product_id});
              // if(request){
                // const newtransaction = new Transaction({
                //   user:user_id , product:product_id , merchantrequest_id:responseinfo.MerchantRequestID ,  checkoutrequest_id :responseinfo.CheckoutRequestID
                // })
                // await newtransaction.save();
                // request.payments.payment_info.transaction = newtransaction._id;
                request.payments.payment_info.merchantrequest_ids.push(responseinfo.MerchantRequestID);
                request.payments.payment_info.checkoutrequest_ids.push(responseinfo.CheckoutRequestID);
                // request.payments.total_paid = request.payments.total_paid + Number(amount);
                // request.payments.amount_remaining = (request.payments.total_payment_required - (Number(amount)+request.payments.total_paid));
                // if((request.payments.total_payment_required - (Number(amount)+request.payments.total_paid)) <= 0 ){
                //   request.payments.status = 'fully paid'
                // }
                // else{
                //   request.payments.status = 'not fully paid'
                // }
                
                await request.save();
                return res.status(200).json({error:false , message:'stk pushed successfully' , info:responseinfo});
              // }
              // else{
              //   console.log('no such request found in the database');
              //   return res.status(400).json({error:true , message:'no such request found in the database'})
              // }


            }
            else{
              console.log('failed to  push stk');
              const responseinfo = await response.json();
              console.log(response , responseinfo);
              return res.status(500).json({error:true , message:'error pushing stk' })
            }
    
           }
           else{
            console.log('error getting auth token (from auth URL)');
            return res.status(500).json({error:true , message:'server error getting auth token' , error:err});
           }
      }
      catch(err){
        console.log('error processing payment' , err);
        return res.status(500).json({error:true , message:'server error getting auth token' , error:err});
      }
    }
   
    else{
      return res.status(400).json({error:true , message:'you entered an invalid number'})

    }
  }


})




router.post('/callback', express.json(), async function(req, res){
 try{
  
  console.log('✅ M-Pesa Callback Received:', req.body);
  console.log('meta' , req.body.Body.stkCallback.CallbackMetadata);
  const info = req.body.Body.stkCallback;

  const transaction = await Transaction.findOne({checkoutrequest_id:info.CheckoutRequestID });
  if(transaction){
    console.log('duplicate transaction detected , transaction already exists');
    return res.sendStatus(200)
  }
 
  
    // res.sendStatus(200);
    const request = await Request.findOne({"payments.payment_info.checkoutrequest_ids":info.CheckoutRequestID});
     if(request){
      if(info.ResultCode == 0){

        const meta = req.body.Body.stkCallback.CallbackMetadata;

        const  amount = meta.Item.find(function(val , index){
          return val.Name === 'Amount'
        });
      
      
        const  mpesareceiptnumber = meta.Item.find(function(val , index){
          return val.Name === 'MpesaReceiptNumber'
        });
      
        const  phonenumber = meta.Item.find(function(val , index){
          return val.Name === 'PhoneNumber'
        });
      
        const  date = meta.Item.find(function(val , index){
          return val.Name === 'TransactionDate'
        });
      
        console.log('meta data' , mpesareceiptnumber , phonenumber , date , amount)


         const newtransaction = new Transaction({
          user:request.client ,
          product:request._id ,
          merchantrequest_id:info.MerchantRequestID ,
          checkoutrequest_id :info.CheckoutRequestID , 
          transaction_date:date?.Value ,
          mpesa_rcepient_number:mpesareceiptnumber?.Value ,
          phone_number:phonenumber?.Value , 
          amount: amount?.Value 
          
         })
         await newtransaction.save();

         request.payments.payment_info.transactions.push( newtransaction._id);
        //  request.payments.payment_info.merchantrequest_id = responseinfo.MerchantRequestID;
        //  request.payments.payment_info.checkoutrequest_id = responseinfo.CheckoutRequestID;
         request.payments.total_paid = request.payments.total_paid + Number(amount?.Value);
         request.payments.amount_remaining = (request.payments.total_payment_required - request.payments.total_paid);
         if(request.payments.amount_remaining <= 0 ){
           request.payments.status = 'fully paid'
         }
         else{
           request.payments.status = 'not fully paid'
         }
         request.initiated = true;

         await request.save();
         res.sendStatus(200);
       
      }
      else{
        console.log('transaction was not completed/successful')
       const merchantrequest_ids = request.payments.payment_info.merchantrequest_ids.filter(function(val , index){
        return val != info.MerchantRequestID
       })

       const checkoutids =  request.payments.payment_info.checkoutrequest_ids.filter(function(val , index){
        return val != info.CheckoutRequestID
       })

      
       request.payments.payment_info.merchantrequest_ids = merchantrequest_ids;
       request.payments.payment_info.checkoutrequest_ids = checkoutids;

       await request.save();



       res.sendStatus(200);
      }
     }
     else{
      console.log('could not find such a request' ,info.CheckoutRequestID);
     
     res.sendStatus(200);
     }

  }
 
 
 
 catch(err){
  console.log('error in payment callback' , err);
  const request = await Request.findOne({"payments.payment_info.checkoutrequest_ids":info.CheckoutRequestID});
  const merchantrequest_ids = request.payments.payment_info.merchantrequest_ids.filter(function(val , index){
    return val != info.MerchantRequestID
   })

   const checkoutids =  request.payments.payment_info.checkoutrequest_ids.filter(function(val , index){
    return val != info.CheckoutRequestID
   })

   await request.save();
   request.payments.payment_info.merchantrequest_ids = merchantrequest_ids;
   request.payments.payment_info.checkoutrequest_ids = checkoutids;

  res.sendStatus(200);

 }
});


// router.post('/callback', express.json(), (req, res) => {
//   try {
//     console.log('✅ M-Pesa Callback Received:', req.body);
    
//     // Extract the actual callback data
//     const callbackData = req.body.Body?.stkCallback;
    
//     if (callbackData) {
//       console.log('Transaction Result:', callbackData.ResultCode === 0 ? 'Success' : 'Failed');
//       console.log('CheckoutRequestID:', callbackData.CheckoutRequestID);
//       console.log('MerchantRequestID:', callbackData.MerchantRequestID);
      
//       // Process payment result here
//     } else {
//       console.warn('⚠️ Unexpected callback format:', req.body);
//     }
    
//     res.sendStatus(200);
//   } catch (err) {
//     console.error('❌ Callback Processing Error:', err);
//     res.sendStatus(200); // Always respond with 200
//   }
// });









router.patch('/edit_request' , memstorage.array('attachments' , 20) ,  async function(req , res){
  try{
    
  console.log('EDITTING REQUEST RECEIVED' , req.body ,   'FILES' , req.files);
  const {type , description , timeunit , timequantity , names , number , email , user , reqid} = req.body;
  const files = req.files;
  // let attachment_ids = []
  const request = await Request.findOne({_id:reqid});
  if(request){
  
   if(request.rejected){
    return res.status(400).json({error:true , message:'request is already rejected' })

   }
    if(files?.length > 0){
      const attachments_upload = await files.map(function(val , index){
         return (
          new Promise(function(resolve , reject){
  
            // const path = val.path;
            const name = val.originalname;
            const type = val.mimetype;
            const size = val.size;
    
            const readstream =  Readable.from(val.buffer);
            const uploadstream = requestbucket.openUploadStream(name , {
              metadata : {
                name , type , size 
              }
            });
    
            readstream.pipe(uploadstream);
    
            uploadstream.on('finish' , function(){
              resolve( uploadstream.id);
  
             
            })
  
            uploadstream.on('error' , function(err){
              reject(err);
             
              
            })
  
          })        
         )
      })
  
      const attachment_ids = await Promise.all(attachments_upload);
      request.client = user;
      request.type = type;
      request.description = description;
      request.timeunit = timeunit;
      request.timequantity = timequantity;
      request.names = names;
      request.number = number;
      request.email =  email;
      request.attachments = attachment_ids;
      request.updated = true;
      // const newrequest = new Request({
      //   client:user ,  type , description , timeunit , timequantity , names , number , email , attachments:[...attachment_ids]
      // })
  
      await request.save();
      // await sender.requests.push(newrequest._id);
      // await sender.save();
      console.log('request upated successfully');
      return res.status(200).json({error:false , request:request});
      // include saving therequest's id in the user's requests
  
    }
    else{
      request.client = user;
      request.type = type;
      request.description = description;
      request.timeunit = timeunit;
      request.timequantity = timequantity;
      request.names = names;
      request.number = number;
      request.email =  email;
      request.attachments = [];
      // const newrequest = new Request({
      //   client:user ,  type , description , timeunit , timequantity , names , number , email 
      // })
  
      await request.save();
      // await sender.requests.push(newrequest._id);
      // await sender.save();
      console.log('request upated successfully');
      return res.status(200).json({error:false});
  
    }


  }
  else{
    console.log('request unidentified');
    return res.status(401).json({error:true , message:'request unidentified' })
  }

  }
  catch(err){
    console.log('error processing request' , err);
    return res.status(500).json({error:true , message:err});
  }
})





router.patch('/view_updates/:id' , async function(){
  try{
    const id = req.params.id
    const request = await Request.findOne({_id:new ObjectId(id)});
    if(!request){
      console.log('no such request found');
      return res.status(400).json({error:true , message:'no such request found'})
    }
    else{
      request.updated = false;
      request.update_seen = true;
      await request.save();

      console.log('updates seen');
       return res.status(200).json({error:false , message:'request updates seen' , request})
    }
  }
  catch(err){
    console.log('error viewing requests update');
    return res.status(500).json({error:true , error:err})
  }
})








// router.post('/upload_ai_doc' , ai_doc_uploader.array('docs' , 20)  , async function(req , res){
//   try{
//     const files = req.files;
//    if(files.length > 0){
//     console.log('FILES' , files)
//     const fileuploads = files.map(function(val , index){
//       return new Promise(function(resolve , reject){
//          const path = val.path;
//          const name = val.originalname;
//          const size = val.size;
//          const type = val.mimetype;

//          const readstream = fs.createReadStream(path);
//          const uploadstream = aidocsbucket.openUploadStream(name ,{
//           metadata: {name , size , type}
//          } )

//          readstream.pipe(uploadstream);
//          uploadstream.on('finish' , function(){
//           console.log('doc upload finished');
//           resolve(uploadstream.id);
//           fs.unlink(path , function(err){
//             if(err){
//               console.log('failed to delete doc')
//             }
//             else{
//               console.log('doc deleted')
//             }
//           })
//          })

//          uploadstream.on('error' , function(err){
//           console.log('error occured during uploading' , err);
//           reject(err);

//           fs.unlink(path , function(err){
//             if(err){
//               console.log('failed to delete doc')
//             }
//             else{
//               console.log('doc deleted')
//             }
//           })
//          })
//       })

      
//     })
//     const upload_ids = await Promise.all(fileuploads);
//     return res.status(200).json({error:false , message:'files uploaded successfully'})
//    }
//   else{
//     console.log('empty files fields')
//     return res.status(400).json('empty document fields');
//   }

//   }
//   catch(err){
//     console.log('error uploading doc' , err);
//     return res.status(500).json({error:true , message:'server error'});
//   }
// } )


router.get('/ai_doc_objects' , async function(req , res){
  try{

    console.log('GETTING DOCS....')
    const docs = await aidocsbucket.find({}).toArray();

    // const docs = await aidocsbucket.find({}).toArray();

    if(docs.length == 0){
      return res.status(200).json({error:false , docs})
    }
    else{
      console.log('docs found' , docs)
      
      return res.status(200).json({error:false , docs})
    }
  }
  catch(err){
    console.log('error fetchung uploads' , err);
    return res.status(500).json({error:true , message:'server error'});
  }
})





router.post('/make_ai/:name' , async function(req , res){
     try{
      const name = req.params.name;
      const newai = new Ai({
        name
      });
      await newai.save();
      return res.status(200).json({error:false , message:'ai instance created successfully'});
     }
     catch(err){
      console.log('error making ai object' , err);
      return res.status(500).json({error:true , message:`error making ai instance ,${err}`})
     }
})


router.get('/ai_doc/:id' , async function(req , res){
  try{
    console.log('fetching ai docs');
    const id = new ObjectId(req.params.id);
  
  
   const files = await  aidocsbucket.find({_id:id}).toArray();
   if(!files || files.length == 0){
    console.log('file does not exist');
    return res.status(400).json({error:true , message:'file does not exist'});
   }
   else{
    const file = files[0]

    res.set({
     'Content-Type': file.metadata.type || 'application/octet-stream',
     'Content-Disposition': `inline; filename="${file.filename}"`
   });
 
   const downstream = aidocsbucket.openDownloadStream(id);

   downstream.on('error', (err) => {
    console.error('Error while streaming:', err);
    if (!res.headersSent) {
      res.status(500).end('Error while streaming file');
    }
  });

  downstream.on('end', () => {
    console.log('✅ Successfully streamed file:', file.filename);
  });
   downstream.pipe(res);


  //  res.on('error' , function(err){
  //    console.log('error streaming' , err);
  //    return res.status(500).json({error:true , message:'error streaming'});
 
  //  })
 
 
  //  res.on('finish' , function(){
  //    console.log('successfully streamed' , );
  //    // return res.status(500).json({error:true , message:'error streaming'});
 
  //  })
   }
   
     
  
  }
  catch(err){
    console.log('error getting ai doc' , err);
    return res.status(500).json({error:true , message:'server error'});
  }
})




router.delete('/delete_ai_doc/:id' , async function(req , res){
  try{
    const id = new ObjectId(req.params.id);
    console.log('fetching ai doc for deletion' , id);
    const humverseindex = await index();
     const AIinstance = await Ai.findOne({});

     if(!AIinstance){
      console.log('AI instance not set up');
      return res.status(404).json({error:true , messsage:'AI instance not set up'})
     }
  
   const files = await  aidocsbucket.find({_id:id}).toArray();
   if(!files || files.length == 0){
    console.log('file does not exist');
    return res.status(400).json({error:true , message:'file does not exist'});
   }
   else{
    const file = files[0];
    const info = file.metadata;
    console.log('file' , file , 'metadata' , info);
      await  aidocsbucket.delete(id);
      console.log('deleted file from database');
      //  res.status(200).json({error:false ,  message:'successfully deleted file'});
      
       const docvector = await  humverseindex._fetchCommand.run([info.name]).catch(function(err){
        console.log('error fetching vector' , err)
       })

       console.log('VECTOR' , docvector);

       if(docvector){
        console.log('vector found' , docvector);
        await humverseindex._deleteOne(file.metadata.name);

        const remainingfiles = AIinstance.uploads.filter(function(val , index){
          return val.toString() !== id.toString();
        })

        console.log('REMAINING FILES' , remainingfiles);
        AIinstance.uploads = remainingfiles;
        await AIinstance.save();
        return res.status(200).json({error:false , message:'successfully deleted vectro'});
       }
       else{
        console.log('the vector does not exist');
        return res.status(404).json({error:true , message:'vevtor not found'});
       }
     
    
   }
   
     
  
  }
  catch(err){
    console.log('error deleting ai doc' , err);
    return res.status(500).json({error:true , message:'server error'});
  }
})

















router.post('/upload_to_ai' , memstorage.fields([{name:'docs' , maxCount:20}, {name:'docs_disk' , maxCount:20}]) ,  async function (req , res){
  try{
    const humverseindex = await index();
    console.log('FILES.....' , req.files);
    const files = req.files['docs'] || [];
    const diskfiles = req.files['docs_disk'] || [];
    let diskuploads;
    let uploads;
    const AIinstance = await Ai.findOne({});
    if(!AIinstance){
      console.log('AI instance not set up')
      return res.status(404).json({error:true , message:'AI instance not set up yet'});
    }

    if(diskfiles.length > 0){
      diskuploads = diskfiles.map(async function(val , index){
        return new Promise(async function(resolve , reject){
          try{
             const name = val.originalname;
            //  const path = val.path;
             const type = val.mimetype;
             const size = val.size;

             const readstream = Readable.from(val.buffer);
             const uploadstream = aidocsbucket.openUploadStream(name , {
              metadata:{
                name , type , size
              }
             });
             readstream.pipe(uploadstream);
            
             uploadstream.on('finish' , function(){
                  resolve(uploadstream.id);
                  console.log('file uploaded to database');

                  // fs.unlink(path , function(err){
                  //   if(err){
                  //     console.log('error unlinking file');
                  //   }
                  //   else{
                  //     console.log('file unlinked');
                  //   }
                  // })
             })


             uploadstream.on('error' , function(err){
               reject(err);
              console.log('file upload stream failed');

              // fs.unlink(path , function(err){
              //   if(err){
              //     console.log('error unlinking file');
              //   }
              //   else{
              //     console.log('file unlinked');
              //   }
              // })
         })



          }
          catch(err){
            console.log('error at disk uploa promise', err);
          }
        })
      })
    }
    else{
      console.log('no disk files found' );
      return res.status(400).json({error:true , message:'no disk files uploadd'})
    }
    if(files.length > 0){
       uploads =  files.map(function(val , index){
          return new Promise(async function(resolve , reject){
          try{
            const name = val.originalname;
            // const path = val.path;
            const type = val.mimetype;
            const size = val.size;
            const readstream = Readable.from(val.buffer);

            // extract text from documents
            const buffer = val.buffer;
            const parsed = await pdfParse(buffer)
            const text = parsed.text;

            if(!text || text.trim()==''){
              // return res.status(400).json({error:true , message:'you uploaed files/docs with no text'})
              return reject('cannot process an empty file')
            }
            const chunks = text.match(/[\s\S]{1,1000}(?=\s|\n|$)/g);
           

           for(const chunk of chunks){
            const emb = await ai.embeddings.create({
              model:'text-embedding-3-small',
              input : chunk
            })



            const embedding = emb.data[0].embedding;
            const vector = {
              id:name,
              values :embedding,
              metadata:{
                name:name,
                sender:'admin',
                text:text
              }
            }
           

            
            // const humverseindex = await pineconedb.index(process.env.PINECONE_INDEX_NAME).catch(function(err){
            //   reject(err);
            // });

          
             await  humverseindex.upsert(
                [vector]
             )

          
           }

            resolve({error:false , message:'successfully embedded document'})
          }
          catch(err){
      reject(err);
          }



          })
        })
        
    }
    else{
      return res.status(400).json({error:true , message:'you sent an empty file field'})
    }

    const uploaded = await Promise.all(uploads);
    const filediskuploads = await Promise.all(diskuploads);
    // const aiobject = await Ai.findOne({});
    // const aiobj = aiobject;
    AIinstance.uploads = [...AIinstance.uploads , ...filediskuploads];
    await AIinstance.save();
    console.log('successfully embedded docs');
    return res.status(200).json({error:false , message:'successfully embedde docs'});
  }
  catch(err){
    console.log('error uploading to ai' , err);
    return res.status(500).json({error:true , message:'server error'})
  }
 })



 router.post('/delete_index/:id' , async function(req , res){
             try{

        const id = decodeURIComponent(req.params.id);
        console.log('ID' , id);
        const humverseindex = await index();
        // console.log('HUMVERSEINGEX' , humverseindex);
        
        const deletion = await humverseindex._deleteOne(id);
        return res.status(200).json({error:false , message:'successfully deleted index' });
             }
             catch(err){
              console.log('error deleting inex' , err);
              return res.status(500).json({error:true , message:'server error' , error:err});
             }
 })









router.post('/ask_assistant' , async function(req , res){
  try{
    console.log(req.body);
   const{ question ,user} = req.body;

   const user_acc = await  User.findOne({_id:user});
if(!user_acc){
  return res.status(400).json({error:true , message:'user not found'});
}

const humverseindex = await index();
if(!humverseindex){
  return res.status(500).json({error:true , message:'pinecone index not found'});

}





   const embededq = await ai.embeddings.create({
    model:'text-embedding-3-small',
    input:question,
   
   })

   

   const emb = embededq.data[0].embedding;

  
  //  const vector = {
  //   id:newquestion._id,
  //   values: emb,
  //   metadata:{
  //     text:question,
  //     sender:user
  //   }
  //  }
  //  const storedemb = await humverseindex.upsert(vector);
   const matches = await  humverseindex._queryCommand.run({
    vector:emb,
    topK:5,
    includeMetadata:true
   })

   console.log('matches' , matches);

  

   if(!matches || matches.length == 0){
    console.log('no matches found');
    return res.status(400).json({error:true , message:'no match for your question found in database'})
   }

   const matchstrings = matches.matches.map(function(val ,index){
    return   val.metadata.text
    
 })

   console.log('match strings' , matchstrings);

   const message = [
    {role:'system' , content:'you are an intelligent user , answer the question based on the knowledge contained in the contexts provided. if the question cannot be answered based on the contexts , do not answer , just give a reason why you cannot answer the question eg you do not have the info , the question is out of scope , just find a response , but do not answer the question'},
    {role:'user' , content :`context  : \n\n ${matchstrings.join('\n\n')}\n\n Question : ${question}`}
  ] 


  const response = await ai.chat.completions.create({
    model:'gpt-4o',
    messages:message,
    temperature:0.7,
    stream:true
  })
       
  let fullresponse = '';

  for await (let chunk of response){
    const content = chunk.choices?.[0].delta?.content;
    if(content){
      fullresponse += content;
      res.write(`data: ${content}\n\n`)
    }
  }

  res.write(`data: [DONE]\n\n`);
  res.end();

  console.log(message);

  // console.log('RESPONSE' , response.choices[0].message.content);
  
  console.log('RESPONSE' , response);



  console.log('FULL RESPONSE' , fullresponse);

   const newquestion = new Query({
    sender:user , text:question , response: fullresponse
})

await newquestion.save();
user_acc.questions.push(newquestion._id);
await user_acc.save();



// return res.status(200).json({error:false  , response , message:'querry processed successfully'});

  }
  catch(err){
    console.log('error processing question' , err);
    return res.status(500).json({error:true , message:'error processing query' ,  error:err})
  }
})
 




router.get('/stream_request_file/:id' , async function(req , res){
  try{
    const id = req.params.id;
    const files = await requestbucket.find({_id:new ObjectId(id)}).toArray();
    if(!files || files.length <= 0){
      console.log('no such file exists');
      return res.status(400).json({error:true , message:'no such file exists'});
    }
    else{
      const  file = files[0];
      const downloadstream = requestbucket.openDownloadStream(new ObjectId(id));
      downloadstream.on('error' , function(err){
            console.log('error streaming file' , err);
            return res.status(500).json({error:true , message:'error occured when streaming file' , message:err})
  
      })
  
      downloadstream.on('finish' , function(){
        console.log('successfully streamed file')
      })
      res.set({
        'Content-Type': file.metadata?.type || 'application/octet-stream',
        'Content-Disposition': `inline; filename="${file.filename}"`
      });
  
      downloadstream.pipe(res);
    }
  
  }
  catch(err){
    console.log('error during streaming file' , err);
    return res.status(500).json({error:true , message:'server error' , problem:err})
  }
})


router.get('/get_request_file_info/:id' , async function(req , res){
    try{
       const id = req.params.id;
       console.log('getting info for ' , id);
       const files = await requestbucket.find({_id:new ObjectId(id)}).toArray();
       if(!files || files.length == 0){
        console.log('no such file exists');
        return res.status(400).json({error:true , message:'no such file exists'});
       }
       else{
        const file = files[0];
        const info = file;
        return res.status(200).json({error:false , info:info})

       }
    }
    catch(err){
      console.log('error occured getting request file info' , err);
      return res.status(500).json({error:true , message:'server error occured when streaming file' , problem:err})
    }
})




router.post('/send_preview' , async function(req , res){
  try{
     const {id , user_id } = req.body;
     const previews = req.files;
     const request = await Request.findOne({_id:new ObjectId(id)});
     if(!request){
      console.log('no such request was found');
    return res.status(400).json({error:true , message:'no such request was found'});
     }

     if(!files || files.length ===0){
      console.log('no files attached to the request');
      return res.status(400).json({error:true , message:'no files attached to the request'});

     }

     else{
      console.log('uploading previews...')
      const uploads = files.map(function(val , index){
        return new Promise(async function(resolve , reject){
              const name = val.originalname;
              const path = val.path;
              const size = val.size;
              const type = val.mimetype;

              const readstream = fs.createReadStream(path);
              const uploadstream = previewbucket.openUploadStream(name , {
                metadata:{
                  name , size , type
                }
              });

              readstream.pipe(uploadstream);

              uploadstream.on('error' , function(err){
                console.log('error uploading file' , err);
                reject(err);

                fs.unlink(path , function(err){
                  if(err){
                    console.log('errror unlinking file');
                  }
                  else{
                    console.log('unlinked file successfully');
                  }
                })
              })

              uploadstream.on('finish' , function(){
                console.log('uploaded preview successfully');
                resolve(uploadstream.id);

                fs.unlink(path , function(err){
                  if(err){
                    console.log('errror unlinking file');
                  }
                  else{
                    console.log('unlinked file successfully');
                  }
                })
              })
        })
      })

      const uploadpreviews = await Promise.all(uploads);
      const prevs = request.previews;
      const newprevs = [...prevs , ...uploadpreviews];
      request.previews = newprevs;
      await request.save();
      console.log('previews sent successfully')
      return res.status(200).json({error:false , message:'previews sent successfully' , request:request});

     }
  }
  catch(err){
    console.lod('error sending previews' , err);
    return res.status(500).json({error:true , error:err});
  }
} )



router.get('/stream_preview/:id' , async function(req , res){
        const id = req.params.id;
        const files = await previewbucket.find({_id:new ObjectId(id)}).toArray();
        if(files.length == 0 || !files){
          console.log('no such file exists');
          return res.status(400).json({error:true , message:'no such file exists'});
        }

        const file = files[0];
        res.set({
          'Content-Type': file.metadata.type || 'application/octet-stream',
          'Content-Disposition': `inline; filename="${file.filename}"`
        });
      
        const downstream = previewbucket.openDownloadStream(id);
     
        downstream.on('error', (err) => {
         console.error('Error while streaming:', err);
       
           res.status(500).end('Error while streaming file');
       
       });
     
       downstream.on('end', () => {
         console.log('✅ Successfully streamed file:', file.filename);
       });
        downstream.pipe(res);
})


router.get('/get_preview_info/:id' , async function(req , res){
  try{
     const id = req.params.id;
     const files = await previewbucket.find({_id:new ObjectId(id)}).toArray();
     if(files.length == 0 || !files){
      console.log('no such file found');
      return res.status(400).json({error:true , message:'file does not exist'});
     }
     const file = files[0];
     return res.status(200).json({error:false , file:file});
  }
  catch(err){
    console.log('error getting preview info' , err);
    return res.status(500).json({error:true , message:'error getting preview info'});
  }
})





 
module.exports = router