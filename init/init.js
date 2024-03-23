const mongoose=require("mongoose");
// const initData=require("./data");
// const initData=require("./fruitdata");
const initData=require("./vegdat");


const veg =require("../modules/veg");
const fruit =require("../modules/fruit");

const MONGO_URL="mongodb+srv://mhs93679:gFhrNR1R7XQgDETX@cluster1.ktg1xuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

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
    await veg.insertMany(initData.data);
    // await fruit.deleteMany({});
    // await fruit.insertMany(initData.data)
 console.log("data is intialized")

};
initDB();