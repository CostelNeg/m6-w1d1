import express from 'express';
import {authorsRoute} from './Modeli/authorsRouters.js'
import "dotenv/config";
import mongoose from 'mongoose';
import { config } from 'dotenv';

config()

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

 app.use('/authors', authorsRoute)

 const initServer = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
console.log("server collegato con mongodb ")
app.listen(PORT, () => {
console.log("cosnesione ok, sei sulla porta : " + PORT)
})
    }
    catch(error){
        console.log("❌ CONNECTION FAILED! Error: ", error)
    }


 }
 initServer()




// app.listen(PORT , () =>{
//     console.log(`Server sulla porta http://localhost:${PORT}`)
// })
