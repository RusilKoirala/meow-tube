
import Connect_DB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config(); 
import express from "express"
const app = express();



Connect_DB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch((err) => {
        console.log("Mongo db has failed!", err);
    });

