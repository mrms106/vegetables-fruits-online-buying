const express=require("express");
const router=express.Router();
const {isLoggedIn}= require("../middleware/middleware.js")
const buycontroller=require("../controller/buy");

router.post("/confirm",buycontroller.buyrouter);
router.get('/buy', buycontroller.buymain);

module.exports=router;