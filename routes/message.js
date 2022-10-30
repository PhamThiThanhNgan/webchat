const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageController");
const { chatMiddleware } = require("../controllers/chatMiddleware");
const upload = require("../utils/uploader");

const router = express.Router();

router.route("/:chatId").get(chatMiddleware, allMessages);
router.route("/").post(chatMiddleware, upload.single('image'), sendMessage);

module.exports = router;