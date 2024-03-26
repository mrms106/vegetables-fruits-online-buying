const express=require("express");
const router=express.Router();
const {isLoggedIn}= require("../middleware/middleware.js")
const fruitcontroller=require("../controller/fruit");

router.get("/order/fruit",isLoggedIn,fruitcontroller.fruitmain);
router.get("/addfruit",isLoggedIn,fruitcontroller.createfruit);
router.post("/addfruit",fruitcontroller.createfruitroute);
router.post('/add-to-cart/:fruitId', fruitcontroller.fruiteaddtocartroute);
router.post("/order/fruit/:fruitId",fruitcontroller.removefromcartroute );
router.get("/order/fruit/:id/confirm",isLoggedIn,fruitcontroller.fruitbuy);
router.post("/deletefruit/:fruitId",isLoggedIn,fruitcontroller.deletefruit);

module.exports=router;