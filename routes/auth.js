const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");
const upload = require("../utils/uploader");
const router = require("express").Router();
//REGISTER
router.post("/register", authController.registerUser);

//REFRESH TOKEN
router.post("/refresh", authController.requestRefreshToken);
//LOG IN
router.post("/login", authController.loginUser);
//LOG OUT
router.post("/logout", authController.logOut);
//USER INFO
router.get("/me", middlewareController.verifyToken, authController.userInfo);
//EDIT USER PROFILE
router.put("/user-profile", middlewareController.verifyToken, upload.single('avatar'), authController.updateInfo);
// 
//SEND RESET PASSWORD LINK TO MAIL
router.post("/forgot-password", authController.sendMailForgot);
//RESET PASSWORD
router.post("/reset-password/:id/:token", authController.resetPassword);

module.exports = router;