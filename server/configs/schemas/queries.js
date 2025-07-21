const mongoose = require('mongoose');



const Queryschema = new mongoose.Schema({
    // picture : {type:mongoose.Schema.Types.ObjectId},
    sender : {type:mongoose.Schema.Types.ObjectId , ref:'user'},
    // email : {type:String , required:true},
    // password : {type:String , required:true},
    // requests : [{type:mongoose.Schema.Types.ObjectId , ref:'request'}],
    // admin : {type:Boolean , required:false , default:false},
    date: {type:String , required:false , default:function(){
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');        // getDate not getDay
    const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because January = 0
    const year = String(date.getFullYear());
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

        return `${day}-${month}-${year}-${hour}-${minute}`;
     }},
     text:{type:String , required:true},
     response:{type:String , required:true}


} ,   {timestamps:true})

const Query = mongoose.model('query' ,Queryschema);

module.exports = Query;