const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const fruitSchema= new Schema({
    title : String,
    price : Number,
    image : String,
    mycart :[String],
});

const Fruit=mongoose.model("fruit",fruitSchema);
module.exports=Fruit;