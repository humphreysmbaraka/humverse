const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const atlasconnection = async function(){
    try{
       const connection =  await mongoose.connect(process.env.ATLAS_CONNECTION_STRING , {
        tls: true,
        tlsAllowInvalidCertificates: true, 
       });
       console.log('connecte to atlas db')
        return  connection;
    }
    catch(err){
        console.log('error connecting to atlas db' , err);
        throw err;
    }
    
}


module.exports = atlasconnection;