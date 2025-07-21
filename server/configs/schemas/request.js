const mongoose = require('mongoose');



const Requestschema = new mongoose.Schema({
     client : {type:mongoose.Schema.Types.ObjectId, required:false , ref:'user'},
     type: {type:String , required:true},
     description: {type:String , required:true},
     timeunit: {type:String , required:true},
     timequantity: {type:Number , required:true},
     names: {type:String , required:true},
     number: {type:String , required:true},
     payments: {type: new mongoose.Schema({
        status:{type:Number , default:null},
        deposit: {type:Number , default:null},
        total_payment_required:{
            domain_name_cost:{type:Number , default:null}
        },
        total_paid: {type:Number , default:null},
        amount_remaining : {type:Number , default:null},
        payment_info:{
            domain_name_cost:{type:Number , default:null}
        },
        currency : {type:String , default:null},
    } , {_id:false}
     ), default:{} },
     email:{type:String , required:true},
     attachments : [{type:mongoose.Schema.Types.ObjectId}],
     received: {type:Boolean , default:false},
     accepted: {type:Boolean , default:false},
     initiated: {type:Boolean , default:false},
     rejected: {type:Boolean , default:false},
     cancelled: {type:Boolean , default:false},
     previews: [{type:mongoose.Schema.Types.ObjectId , required:false}],
     costs: {type: new mongoose.Schema({
        makingcost: {type:Number , default:null},
        deploymentcost:{
            domain_name_cost:{type:Number , default:null}
        },
        hostingcost:{type:Number , default:null},
        maintainance: {type:Number , default:null},
        total : {type:Number , default:null},
        currency : {type:String , default:null}
    
    } , {_id:false}
     ), default:{} },
     date: {type:String , required:false , default:function(){
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0'); // getDate() instead of getDay()
        const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because it's zero-indexed
        const year = String(date.getFullYear());
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');

        return `${day}-${month}-${year}-${hour}-${minute}`;
     }}
    //  pending: {type:Boolean , default:false},
   
    // password : {type:String , required:true},
    // requests : [{type:mongoose.Schema.Types.ObjectId , ref:'request'}]

} ,  {timestamps:true});

const Request = mongoose.model('request' ,Requestschema);

module.exports = Request;