const {Pinecone} = require('@pinecone-database/pinecone');
const dotenv = require('dotenv').config();

const pinedb = new Pinecone({
    apiKey : process.env.PINECONE_API,
    // environment : 'gcp-starter'
})




module.exports = pinedb;