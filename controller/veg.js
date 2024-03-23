const buy=require("../modules/buy")
const fruit=require("../modules/fruit");
const veg=require("../modules/veg");
const User=require("../modules/user");

module.exports.vegmain=async(req,res)=>{
    const Veg=await veg.find({});
    const currUser = req.user; 
    res.render("./veg/buyVeg.ejs",{Veg,currUser});
}

module.exports.vegaddcartroute= async (req, res) => {
    const vegId = req.params.vegId;
    const userId = req.user._id; 
    try {
      const Veg = await veg.findById(vegId);
      if (!Veg) {
        return res.status(404).json({ error: 'Fruit not found' });
      }
      Veg.mycart.push(userId);
      await Veg.save();
      req.flash("success", "Added in cart!");
      res.redirect('/home/order/veg'); 
    } catch (err) {
      console.error(err);
      req.flash("error", "something went wrong!");
    }
  }

module.exports.vegremovecartroute=async (req, res) => {
    const vegId = req.params.vegId;
    const userId = req.user._id; 
    try {
      const Veg = await veg.findById(vegId);
      if (!Veg) {
        return res.status(404).json({ error: 'Fruit not found' });
      }
      Veg.mycart.pull(userId);
      await Veg.save();
      req.flash("success", "removed from cart!");
      res.redirect('/home/order/fruit/cart'); 
    } catch (err) {
      console.error(err);
      req.flash("error", "something went wrong!");
    }
  }

module.exports.vegbuy=async(req,res)=>{
    try{
        const { id } = req.params; 
        const Veg = await veg.findById(id); 
    
        res.render("./veg/vegForm.ejs", { Veg });
}catch(err){
    res.send(err)
    req.flash("error", "something went wrong!");
}
}

module.exports.createveg=(req,res)=>{
  res.render("./veg/addveg.ejs")
}

module.exports.createvegroute=async(req,res)=>{
  try{
    const Veg=new veg(req.body.product);
    await Veg.save();
    req.flash("success", "product is added!");
    res.redirect("/home/order/veg");
  }catch(err){
    req.flash("error", "something went wrong!");
    console.log(err);
  }
}

module.exports.deleteveg=async(req,res)=>{
  try{
    vegId=req.params.vegId;
    const Veg= await veg.findByIdAndDelete(vegId);
    if(!Veg){
      return res.status(404).json({ error: 'Fruit not found' });
    }
    req.flash('success', 'The vegetable is deleted');
    res.redirect('/home/order/veg');
  }catch(err){
    console.error(err); // Log the error for debugging
    req.flash('error', 'Something went wrong');
    res.redirect('/home/order/veg');
}
}

