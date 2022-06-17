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


async function bootstrap() {
    try {
        await openConnection();
        await runMigrations();
        console.info('Connected');
        await db.transaction(async () => {
            const cars = new Cities({
                name: 'Kazan'
            });
            await cars.save();
        })
    } catch (err) {
        console.error(err);
    }
}

bootstrap()