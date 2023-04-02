require("dotenv").config({path: "./config.env"})
const mongoose =  require("mongoose")

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Mongodb Connection success 👍")

    }catch(error){
        console.log("Mongodb Connection Failed ❌")
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB

