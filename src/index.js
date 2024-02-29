import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import app from './app.js';

dotenv.config()

const port = process.env.PORT || 8000;
connectDB()
.then(
    app.listen(port , ()=>{
        console.log(`Server listening on port : ${port}`)
    })
)
.catch((err)=>{
    console.log('MongoDB connection error: ' , err)
})



/*
import express  from "express";

const app = express();

(async ()=>{
    try {
      await  mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
app.on('error', (error)=>{
    console.log("Error:", error);
    throw error;
})
app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`);
})
    } catch (error) {
        console.error("Error:",error);
        throw error;
    }
})()
*/