const {Pinecone} = require('@pinecone-database/pinecone');
const dotenv = require('dotenv').config();
const pineconedb = new Pinecone({
    apiKey:process.env.PINECONE_API,
    // environment:process.env.PINECONE_ENVIRONMENT
})


// const humverseindex = pineconedb.createIndex({
//     name:process.env.PINECONE_INDEX_NAME,
//     dimension:1536,
//     metric:'cosine'
// })


 const   index =  async function(){
   try{
    const indexes = await pineconedb.listIndexes();
    console.log(indexes);
    const names = indexes.indexes.map(function(val , index){
        return val.name;
    })
    console.log('names' , names);
    if(names.includes(process.env.PINECONE_INDEX_NAME)){
         console.log('pinecone index already exists');
           return pineconedb.index(process.env.PINECONE_INDEX_NAME)
    }
    else{
      const db =  await pineconedb.createIndex({
            name:process.env.PINECONE_INDEX_NAME,
            dimension:1536,
            metric:'cosine',
            spec: {
                serverless: {
                  cloud: 'aws', // or 'gcp'
                  region: 'us-east-1' // choose your region
                }
              }


        })

        return pineconedb.index(process.env.PINECONE_INDEX_NAME);
    }
   }
   catch(err){
    console.log('could not initiate pinecone database' , err);
    throw new Error(`Pinecone init failed: ${err.message}`);
   }
}

// const humverseindex =  index();
// console.log('humdex' , humverseindex)
// console.log(typeof(index));
module.exports = index;