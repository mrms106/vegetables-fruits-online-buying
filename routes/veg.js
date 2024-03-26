const express=require("express");
const router=express.Router();
const {isLoggedIn}= require("../middleware/middleware.js")
const vegcontroller=require("../controller/veg");


router.get("/order/veg",isLoggedIn,vegcontroller.vegmain);
router.get("/addveg",isLoggedIn,vegcontroller.createveg);
router.post("/addveg",vegcontroller.createvegroute);
router.post('/addtocart/:vegId',vegcontroller.vegaddcartroute);
router.post("/order/veg/:vegId", vegcontroller.vegremovecartroute);
router.get("/order/veg/:id/confirm",isLoggedIn,vegcontroller.vegbuy);
router.post("/deleteveg/:vegId",isLoggedIn,vegcontroller.deleteveg);

module.exports=router;