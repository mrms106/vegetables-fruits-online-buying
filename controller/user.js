const buy=require("../modules/buy")
const fruit=require("../modules/fruit");
const veg=require("../modules/veg");
const User=require("../modules/user");


module.exports.signup=(req,res)=>{
    res.render("./user/signup.ejs")
}


module.exports.signuproute=async(req,res)=>{
    try{
        let{username,email,password}=req.body;
      const newUser=new User({email,username});
      const registereduser=await User.register(newUser,password);
      req.login(registereduser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome you are logged in!");
    res.redirect("/home/order");
       })
    } catch(e){
        req.flash("error",e.message);
        console.log(e)
        res.redirect("/signup");
}
}

module.exports.login=(req,res)=>{
    
    res.render("./user/login.ejs")
}

module.exports.loginroute=async(req,res)=>{
    req.flash("success", "Welcome you are logged in!");
    res.redirect("/home");
}

module.exports.logout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
         return next(err)
        }
        req.flash("success", "successfully logged out...!");
        res.redirect("/login");
    })
};