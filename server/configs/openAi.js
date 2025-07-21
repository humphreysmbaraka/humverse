const {OpenAI}= require('openai');
const dotenv = require('dotenv').config();
const ai = new OpenAI({
    apiKey:process.env.OPENAi_API
})


module.exports = ai;




