import { openConnection, closeConnection } from './db.js';
import { runMigrations } from './migration.js';
// import Sequelize, {DataTypes} from "./sequelize/types/index.js";
import Cars from './models/Cars.js';
// import UserDetails from './models/UserDetails';
// import Project from './models/Project';
// import Skill from "./models/Skill";

async function bootstrap() {
    try {
        await openConnection();

        await runMigrations();

        // console.info('Connected');


        // await db.transaction(async () => {
        //     const cars = new Cars({id: 'Admin', spec_card: 'Admin', engine: 'Admin', year: 'Admin',
        //         price: 'Admin', color: 'Admin', mileage: 'Admin'});
        //     await cars.save();
    // })
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