const buy=require("../modules/buy")
const fruit=require("../modules/fruit");
const veg=require("../modules/veg");
const User=require("../modules/user");


module.exports.fruitmain=async(req,res)=>{
    const Fruit=await fruit.find({})
    const currUser = req.user; 
    res.render("./fruit/buyFruit.ejs",{Fruit,currUser});
}


module.exports.fruiteaddtocartroute=async (req, res) => {
    const fruitId = req.params.fruitId;
    const userId = req.user._id; 
    try {
      const Fruit = await fruit.findById(fruitId);
      if (!Fruit) {
        return res.status(404).json({ error: 'Fruit not found' });
      }
      Fruit.mycart.push(userId);
      await Fruit.save();
      req.flash("success", "added to cart!");
      res.redirect('/home/order/fruit'); 
    } catch (err) {
      console.error(err);
      req.flash("error", "something went wrong!");
    }
  }

  module.exports.removefromcartroute=async (req, res) => {
    const fruitId = req.params.fruitId;
    const userId = req.user._id; 
    try {
      const Fruit = await fruit.findById(fruitId);
      if (!Fruit) {
        return res.status(404).json({ error: 'Fruit not found' });
      }
      Fruit.mycart.pull(userId);
      await Fruit.save();
      req.flash("success", "removed from cart!");
      res.redirect('/home/order/fruit/cart'); 
    } catch (err) {
      console.error(err);
      req.flash("error", "something went wrong!");
    }
  }

module.exports.fruitbuy=async(req,res)=>{
    try{
        const { id } = req.params; 
        const Fruit = await fruit.findById(id); 
        res.render("./fruit/fruitform.ejs", { Fruit });
}catch(err){
  req.flash("error", "something went wrong!");
    console.log(err)
}
}

module.exports.createfruit=(req,res)=>{
  res.render("./fruit/addfruit.ejs")
}

module.exports.createfruitroute=async(req,res)=>{
  try{
    const Fruit=new fruit(req.body.product);
    await Fruit.save();
    req.flash("success", "product is added!");
    res.redirect("/home/order/fruit");
  }catch(err){
    req.flash("error", "something went wrong!");
    console.log(err);
  }
}
module.exports.deletefruit=async(req,res)=>{
  try {
    const fruitId = req.params.fruitId;
    const deletedFruit = await fruit.findByIdAndDelete(fruitId);
    if (!deletedFruit) {
      return res.status(404).json({ error: 'Fruit not found' });
    }
    req.flash('success', 'The fruit is deleted');
    res.redirect('/home/order/fruit');
  } catch (err) {
    console.error(err); // Log the error for debugging
    req.flash('error', 'Something went wrong');
    res.redirect('/home/order/fruit');
  }
};