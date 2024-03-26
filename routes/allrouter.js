const express=require("express");
const router=express.Router();
const homepagecontroller=require("../controller/homepage");
const {isLoggedIn}= require("../middleware/middleware.js")


router.get("/",isLoggedIn,homepagecontroller.homepage);
router.get("/order",isLoggedIn,homepagecontroller.orderpage);
router.get("/services",isLoggedIn,homepagecontroller.services)
router.get("/order/fruit/cart",isLoggedIn,homepagecontroller.cartpage);



module.exports=router;