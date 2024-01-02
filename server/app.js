const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const corsOptions = {
    origin : "https://mern-deploy-frontend-t6k6.onrender.com"
}


const app = express();


// middleware use

app.use(express.json());
app.use(cors(corsOptions));

// mongoose connection

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    const port = process.env.PORT || 8000;
    app.listen(port,()=>{
        console.log(`App is listening on port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})

// route

app.get("/" , (req,res)=>{
    res.status(200).json({message : "Connected on backend"});
})


