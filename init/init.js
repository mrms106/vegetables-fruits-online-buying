const mongoose=require("mongoose");
const initData=require("./data");
// const initData=require("./Fruit data complete");

const veg =require("../modules/veg");
const fruit =require("../modules/fruit");

const MONGO_URL="mongodb://127.0.0.1:27017/vegetables"

main()
.then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err)
});

async function main() {
    await mongoose.connect(MONGO_URL);
  }

const initDB=async()=>{
    await veg.deleteMany({});
    await fruit.deleteMany({});
    await veg.insertMany(initData.data)
    await fruit.insertMany(initData.data)
 console.log("data is intialized")

};
initDB();