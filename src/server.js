//server.js
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./Route');
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://sethvansh2004:vanshseth2004@cluster0.vltgxgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
app.use("/",router);


app.listen(3001,function(){
    console.log("express server is running on port 3001");
})