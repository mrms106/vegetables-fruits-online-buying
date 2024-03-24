const express=require("express");
const router=express.Router();
const passport=require("passport");
const usercontroller=require("../controller/user");

router.get("/signup",usercontroller.signup);
router.post("/signup",usercontroller.signuproute);
router.get("/login",usercontroller.login)
router.post("/login",passport.authenticate("local",{failureRedirect:'/login'}),usercontroller.loginroute)
router.get("/logout",usercontroller.logout)

module.exports=router;