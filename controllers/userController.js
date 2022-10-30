const User = require("../models/User");
const asyncHandler = require('express-async-handler');

const userController = {
    allUsers: asyncHandler(async (req, res) => { 
        try { 
            const keyword = req.query.search
            ? {
                $or: [
                { username: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
                ],
            }
            : {};
    
            const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
            res.send(users);
        } catch (err) {
            console.log(err);
        }
    })
};

module.exports = userController;
