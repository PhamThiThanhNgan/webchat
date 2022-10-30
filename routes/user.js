const { chatMiddleware } = require("../controllers/chatMiddleware");
const userController = require("../controllers/userController");
const router = require("express").Router();

router.route("/").get(chatMiddleware, userController.allUsers);

module.exports = router;