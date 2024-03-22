const express=require("express");
const router=express.Router();
const vegcontroller=require("../controller/veg");
const fruitcontroller=require("../controller/fruit");
const buycontroller=require("../controller/buy");
const homepagecontroller=require("../controller/homepage");

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); 
    }
    res.redirect("/login"); 
};

router.get("/",isLoggedIn,homepagecontroller.homepage);
router.get("/order",isLoggedIn,homepagecontroller.orderpage);

router.get("/order/veg",isLoggedIn,vegcontroller.vegmain);
router.get("/addveg",isLoggedIn,vegcontroller.createveg);
router.post("/addveg",vegcontroller.createvegroute);
router.post('/addtocart/:vegId',vegcontroller.vegaddcartroute);
router.post("/order/veg/:vegId", vegcontroller.vegremovecartroute);
router.get("/order/veg/:id/confirm",isLoggedIn,vegcontroller.vegbuy);
router.post("/deleteveg/:vegId",isLoggedIn,vegcontroller.deleteveg);

router.get("/order/fruit/cart",isLoggedIn,homepagecontroller.cartpage);

router.get("/order/fruit",isLoggedIn,fruitcontroller.fruitmain);
router.get("/addfruit",isLoggedIn,fruitcontroller.createfruit);
router.post("/addfruit",fruitcontroller.createfruitroute);
router.post('/add-to-cart/:fruitId', fruitcontroller.fruiteaddtocartroute);
router.post("/order/fruit/:fruitId",fruitcontroller.removefromcartroute );
router.get("/order/fruit/:id/confirm",isLoggedIn,fruitcontroller.fruitbuy);
router.post("/deletefruit/:fruitId",isLoggedIn,fruitcontroller.deletefruit);
router.post("/confirm",buycontroller.buyrouter);
router.get('/buy', buycontroller.buymain);


module.exports=router;