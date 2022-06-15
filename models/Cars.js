import db from '../db.js';
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
    color: {
        type: Sequelize.STRING
    },
    mileage: {
        type: Sequelize.STRING
    },
    created_at: {
        type: DataTypes.DATE },
    updated_at: {
        type: DataTypes.DATE },
    }, {
        sequelize: db,
        tableName: 'cars'
    },
);

model.hasOne(City, {as: 'Cities', foreignKey: 'car_id'});
model.hasOne(Marka, {as: 'Markas', foreignKey: 'car_id'});
model.hasOne(Body_type, {as: 'Body_Types', foreignKey: 'car_id'});
model.hasOne(Transmission, {as: 'Transmission', foreignKey: 'car_id'});
model.hasOne(Drive_Unit, {as: 'Drive_Units', foreignKey: 'car_id'});
model.hasOne(Contact, {as: 'Contacts', foreignKey: 'car_id'});
model.hasMany(Photo, {as: 'Photos', foreignKey: 'car_id'});

//belongsTo

City.belongsTo(Cars, {foreignKey: 'card_id'});
Marka.belongsTo(Marka, {foreignKey: 'card_id'});
Body_type.belongsTo(Body_type, {foreignKey: 'card_id'});
City.belongsTo(Cars, {foreignKey: 'card_id'});
City.belongsTo(Cars, {foreignKey: 'card_id'});
City.belongsTo(Cars, {foreignKey: 'card_id'});





