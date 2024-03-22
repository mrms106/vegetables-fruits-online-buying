const express=require("express");
const app=express();
const mongoose=require("mongoose");
const methodOverride=require("method-override");
const path=require("path");
const nodemailer=require("nodemailer");
const veg=require("./modules/veg");
const fruit=require("./modules/fruit");
const User=require("./modules/user");
const buy=require("./modules/buy")
const ejsMate=require("ejs-mate");

//for user authentication
const passport=require("passport");
const localStratergy=require("passport-local");
const session=require("express-session");
const flash=require("connect-flash");
//router
const home=require("./routes/allrouter.js");
//controllers
const usercontroller=require("./controller/user");

//databse
try{
    mongoose.connect('mongodb://127.0.0.1:27017/vegetables')
      .then(() => console.log('Connected to database'));
    }catch(err){
        console.log(err);
    }



app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate);


const sessionOptions={
    saveUninitialized:true,
    resave:false,
    secret:"secret"
}

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
});



app.get("/",(req,res)=>{
    res.redirect("/login")
});

//user authentication
app.get("/signup",usercontroller.signup);
app.post("/signup",usercontroller.signuproute);
app.get("/login",usercontroller.login)
app.post("/login",passport.authenticate("local",{failureRedirect:'/login'}),usercontroller.loginroute)
app.get("/logout",usercontroller.logout)


//accessing pages
app.use("/home",home);

// app.all("*",(req,res,next)=>{
//     next(new expresserr(404,"page not found"));
// });

app.listen("8080",()=>{
    console.log("running on port 8080");
})


