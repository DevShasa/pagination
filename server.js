require("dotenv").config({path: "./config.env"})
const express = require("express");
const connectDB = require("./config/db")
const postRoutes = require("./routes/postRoutes")
const morgan = require('morgan')

connectDB();

const app = express();
app.use(morgan("tiny"))
app.use(express.json())
app.use("/api/v1/posts", postRoutes)


const PORT = process.env.PORT;
connectDB().then(()=>{
    app.listen(PORT, ()=> console.log(`📘 Server running on port ${PORT}`))
})

