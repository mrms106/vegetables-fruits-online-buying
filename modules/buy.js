const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const buySchema=new Schema({
    name:String,
    address:String,
    pincode:Number,
    product:[String],
    quantity:[String],
    total:String,

});

const Buy = mongoose.model("buy",buySchema);
module.exports=Buy;