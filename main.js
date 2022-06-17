import { openConnection, closeConnection } from "./db.js";
import { runMigrations } from "./migration.js";
import Cars from "./models/Cars.js";
import db from "./db";
// import Body_Type from './Body_Type';
// import Contacts from './Contacts';
// import Drive_Unit from './Drive_Unit';
// import Photos from './Photos';
// import Cities from './Cities';
// import Markas from './Markas';
// import transmission from './transmission';


async function bootstrap() {
    try {
        await openConnection();

        await runMigrations();

        console.info('Connected');


        await db.transaction(async () => {
            const cars = new Cars({spec_card: true, engine: 'Admin', year: 'Admin',
                price: 'Admin', color: 'Admin', mileage: 'Admin'});
            await cars.save();
    })
    } catch (err) {
        console.error(err);
    }

        // const projects = [
        //     {name: 'Project 1', user_id: user.id},
        //     {name: 'Project 2', user_id: user.id}
        // ];
        // await Project.bulkCreate(projects);
}

bootstrap();