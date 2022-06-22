import { openConnection, closeConnection } from "./db.js";
import { runMigrations } from "./migration.js";
import db from "./db";
import Cars from "./models/Cars.js";
import Body_Type from "./models/Body_Type";
import Contacts from "./models/Contacts";
import Drive_Unit from "./models/Drive_Unit";
import Photos from "./models/Photos";
import Cities from "./models/Cities";
import Markas from "./models/Markas";
import transmission from "./models/transmission";
import postController from "./controllers/post.controller";
import res from "express/lib/response";
import router from "./routes/post.route";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const postRouter = require('./routes/post.route')

app.use(cors());
app.use(express.json())

app.use( '/post', postRouter)

async function bootstrap() {
    try {
        await openConnection();
        await runMigrations();
        console.info('Connected');
        // await db.transaction(async () => {
        //     const cars = new Cities({ name: 'Kazan', car_id: 1});
        //     await cars.save();
        // })
    } catch (err) {
        console.error(err);
    }
}

app.listen(PORT, function() {
    console.log("Server started successfully");
});

bootstrap()