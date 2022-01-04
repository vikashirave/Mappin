const express = require("express");
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
var cors = require('cors')

dotenv.config();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(()=>{
    console.log("MongoDB Connected")
})
.catch((err) => console.log(err)); 

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800,  ()=>{
    console.log("Backend Server is running");
})


