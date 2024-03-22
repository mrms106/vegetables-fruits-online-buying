const veg=require("../modules/veg");
const fruit=require("../modules/fruit");
const User=require("../modules/user");
const buy=require("../modules/buy")


module.exports.homepage=async(req,res)=>{
    const curruser=req.body;
    res.render("./home/index.ejs",{curruser});
    
}

module.exports.orderpage=(req,res)=>{
    res.render("./home/order.ejs");
}

module.exports.cartpage=async(req,res)=>{
    const userId = req.user._id; 
    
    try {
      const Fruit = await fruit.find({ mycart: userId });
      const Veg = await veg.find({ mycart: userId });
     res.render("./home/cart.ejs",{Fruit,Veg});
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
 
}