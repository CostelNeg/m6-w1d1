import express from 'express';
import {authorsRoute} from './Modeli/authorsRouters.js'
import "dotenv/config";
import mongoose from 'mongoose';
import { config } from 'dotenv';

config()

const PORT = process.env.PORT || 5000
const server = express()
server.use(express.json())

 server.use('/authors', authorsRoute)

 const initServer = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
console.log("server collegato con mongodb ")
server.listen(PORT, () => {
console.log("cosnesione ok, sei sulla porta : " + PORT)
})
    }
    catch(error){
        console.log("❌ CONNECTION FAILED! Error: ", error)
    }


 }
 initServer()



// server.listen(port , () =>{
//     console.log(`Server sulla porta http://localhost:${port}`)
// })
