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
    origin: process.env.CLIENT_URL || 'http://localhost:5173',  // Vite default dev server
    methods: ['GET', 'POST' , 'PATCH' , 'DELETE'],         // Allowed HTTP methods
    credentials: true      
}))
app.use ('/' , require('./routes'));
// app.use('/' , require('./callback'));



const ioserver = http.createServer(app);

const io = new Server(ioserver, {
    cors: {
      origin: process.env.CLIENT_URL ||'http://localhost:5173', // your frontendhere 
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


  socket.on('sent_request' , function(data , callback){
    console.log('incoming request...' , data);
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