const express = require('express');
const {Server} = require('socket.io');
const http = require('http');
const cors = require('cors');
const app = express();
app.use(express.json());
const pinedb = require('./pinecone_setup');
const atlasconnection = require('./configs/maongodb_atlas');
app.use(express.urlencoded({ extended: true }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const dotenv = require('dotenv').config();
console.log('client url' , process.env.CLIENT_URL);


// const allowedOrigin = process.env.CLIENT_URL?.trim() || 'http://localhost:5173';

app.use(cors({
    origin: process.env.CLIENT_URL.trim() || 'http://localhost:5173',  // Vite default dev server
    methods: ['GET', 'POST' , 'PATCH' , 'DELETE'],         // Allowed HTTP methods
    credentials: true      
}))
app.use ('/' , require('./routes'));
// app.use('/' , require('./callback'));



const ioserver = http.createServer(app);

const io = new Server(ioserver, {
    cors: {
      origin: process.env.CLIENT_URL.trim() ||'http://localhost:5173', // your frontendhere 
      methods: ['GET', 'POST' , 'PATCH' , 'DELETE'],
      credentials: true
    }
  });
//
atlasconnection()
.then(function(){
    ioserver.listen(process.env.PORT || 3000 , '0.0.0.0' , function(){
        console.log('server set up successfully');
    })
})
.catch(function(err){
    console.log('error setting up' , err);
})


io.on('connection' , function(socket){
  console.log('socket connected to server' , socket.id);

  socket.on('register' , async function(data , callback){
      try{
    // const {data} = data;
    console.log('registering client' , data)
    socket.join(`${data._id}`);
    callback();
      }
      catch(err){
        console.log('error handling socket register event' , err)
      }
  })


  socket.on('register_admin' , async function(data , callback){
    try{
  // const {data} = data;
  console.log('registering admin' , data)
  socket.join(`admins`);
  callback();
    }
    catch(err){
      console.log('error handling socket admin register event' , err)
    }
})
  
  socket.on('sent_request' , function(data , callback){
    console.log('incoming request...' , data);
    socket.to('admins').emit('request_received');
    callback();
  })


  socket.on('edit_request' , function(data , callback){
    console.log('editted request...' , data);
    socket.to('admins').emit('request_editted');
    callback();
  })

  socket.on('cancel_request' , function(data , callback){
    console.log('cancelled request...' , data);
    socket.to('admins').emit('request_cancelled');
    callback();
  })



  socket.on('request_rejected' , function(data , callback){
    console.log('request rejected...' , data);
    socket.to(`${data.client}`).emit('request_rejected');
    callback();
  })


  socket.on('redeem' , function(data , callback){
    console.log('request redeemed...' , data);
    socket.to(`${data.client}`).emit('request_redeemed');
    callback();
  })



  socket.on('uncancel_request' , function(data , callback){
    console.log('request uncancelled...' , data);
    socket.to('admins').emit('request_uncancelled');
    callback();
  })




  
  socket.on('request_accepted' , function(data , callback){
    console.log('request accepted...' , data);
    socket.to(`${data.client}`).emit('acceptance');
    callback();
  })



 
  socket.on('sent_previews' , function(data , callback){
    console.log('previews incoming...' , data);
    socket.to(`${data.client}`).emit('previews');
    callback();
  })






  socket.on('disconnect' , function(){
    console.log('socket disconnected' , socket.id)
})
})































// if(pinedb){
    //     const checkindex = async function(){
    //         try{
    //          const indexname = process.env.INDEX_NAME;
    //          const indexes = await pinedb.listIndexes();
    //          const names = indexes.indexes.map(function(val){
    //             return val.name;
    //          })
    //          if(names.includes(indexname)){
    //             console.log(`the index ${indexname} already exists`)
    //          }
    //          else{
    //           const newindex =  await pinedb.createIndex({
    //                 name: indexname,
    //                 dimension : 1536,
    //                 metric:'cosine',
    //                 spec: {
    //                     serverless: {
    //                       cloud: 'aws',         // or 'gcp'
    //                       region: 'us-east-1'   // most common region for free tier
    //                     }
    //                   }
    //             })
    
    //               if(newindex){
    //                 console.log('new index created successfully')
    //               }
    //          }
    //         }
    //         catch(err){
    //             console.log('error checking index' , err);
    //         }
    //     }
    
    //     checkindex();
    
    
    // }
    // else{
    //     console.log('not yet');
    // }