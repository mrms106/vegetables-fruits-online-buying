const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const vegSchema= new Schema({
    title : String,
    price : Number,
    image : String,
    mycart :[String],
    
});

const Veg=mongoose.model("Veg",vegSchema);
module.exports=Veg;