import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";


const DB_Connect = async () => {
     try {
       const ConnectionInstance = await mongoose.connect(process.env.MONGODB_URI);
       console.log(`\n Database is connected! DB Host : ${ConnectionInstance.connection.host}`);
       
     } catch (error) {
        console.log(`Error : ${error}`)
        process.exit(1)
     }
}

export default DB_Connect;