import db from '../db'
import {Model, DataTypes} from "sequelize";
import Sequelize from "sequelize/types";

class Cars extends Model {

}

const model = Cars.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    spec_card: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    engine: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    transmission: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    mileage: {
        type: Sequelize.STRING
    }
});

model.hasOne(City, {as: 'Cities', foreignKey: 'car_id'});
model.hasOne(Marka, {as: 'Markas', foreignKey: 'car_id'});
model.hasOne(Body_type, {as: 'Body_Types', foreignKey: 'car_id'});
model.hasOne(Drive_Unit, {as: 'Drive_Units', foreignKey: 'car_id'});
model.hasOne(Contact, {as: 'Contacts', foreignKey: 'car_id'});
model.hasMany(Photo, {as: 'Photos', foreignKey: 'car_id'});

//belongsTo




