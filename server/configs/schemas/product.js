const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
    client : {type:mongoose.Schema.Types.ObjectId , ref:'user'},
    Productname : {type:String , required:true},
    logo :{type:mongoose.Schema.Types.ObjectId ,  },
    password : {type:String , required:true},
    requests : [{type:mongoose.Schema.Types.ObjectId , ref:'request'}]

})

const Product = mongoose.model('product' ,ProductSchema);

module.exports = Product;