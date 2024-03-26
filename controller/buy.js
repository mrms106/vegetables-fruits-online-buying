const buy=require("../modules/buy")
const fruit=require("../modules/fruit");
const veg=require("../modules/veg");
const User=require("../modules/user");
const {mailtouser,mailtoowner}=require("../mailoption/mailoptions");



module.exports.buymain=async (req, res) => {
    try {
        const fruitsInCart = await fruit.find({ mycart: req.user._id });
        const vegIncart = await veg.find({ mycart: req.user._id }); 
        res.render('./home/buy.ejs', { fruitsInCart,vegIncart });
    } catch (err) {
        console.error(err);
       req.flash("error","internal server error");
    }
}
module.exports.buyrouter=async(req,res)=>{
    try{
        const usermail=req.user.email;

        const newBuy= new buy(req.body.buy);
        await mailtoowner(req,res);
        await newBuy.save();
        await mailtouser(req, res);
        req.flash("succes","your product buyed succefully");
        res.render("thanku.ejs");

    }catch(err){
        req.flash("error","internal server error or some problem in buying");
        console.log(err);
    }
}