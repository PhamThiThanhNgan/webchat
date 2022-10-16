const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require("./routes/auth");
const path = require("path");
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, ()=>{
     console.log("CONNECTED TO MONGODB");
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./uploads")));

app.use("/v1/auth", authRoute);
const port = process.env.PORT || 8000;

app.listen(port, () => {
     console.log(`App is running at http://localhost:${port}`);
})