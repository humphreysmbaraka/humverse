const mongoose = require('mongoose');



const TransactionSchema = new mongoose.Schema({
    // picture : {type:mongoose.Schema.Types.ObjectId},
    user : {type:mongoose.Schema.Types.ObjectId , ref:'user'},
    product : {type:mongoose.Schema.Types.ObjectId , ref:'request'},
    merchantrequest_id : {type:String , required:true},
    checkoutrequest_id : {type:String , required:true},
    amount : {type:Number , required:true},
    transaction_date : {type:String ,required:true},
    mpesa_rcepient_number : {type:String , required:true},
    phone_number : {type:String , required:true},
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
    //  text:{type:String , required:true},
    //  response:{type:String , required:true}


} ,   {timestamps:true})

const Transaction = mongoose.model('transaction' ,TransactionSchema);

module.exports = Transaction;