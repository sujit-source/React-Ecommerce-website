import  express  from "express";
import { 
    testController,loginController, registerController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from "../controllers/authController.js";
import { requireSignIn , isAdmin } from "../middlewares/authMiddlewares.js";



//router Object
const router=express.Router();

//routing
//Register || Method POST

router.post("/register", registerController); 

//LOGIN || POST

router.post("/login", loginController);

// Forgot Password
router.post('/forgot-password',forgotPasswordController)

//test routes

router.get("/test", requireSignIn,isAdmin,testController);

// protected route user
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

// protected route Admin
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

//update profile
router.get('/profile',requireSignIn,updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;