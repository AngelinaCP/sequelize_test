import Sequelize, { DataTypes, Model } from 'sequelize';
import db from '../db';
import Body_Type from './Body_Type';
import Contacts from './Contacts';
import Drive_Unit from './Drive_Unit';
import Photos from './Photos';
import Cities from './Cities';
import Markas from './Markas';
import transmission from './transmission';

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

model.hasOne(Cities, {as: 'Cities', foreignKey: 'car_id'});
model.hasOne(Markas, {as: 'Markas', foreignKey: 'car_id'});
model.hasOne(Body_Type, {as: 'Body_Types', foreignKey: 'car_id'});
model.hasOne(transmission, {as: 'Transmission', foreignKey: 'car_id'});
model.hasOne(Drive_Unit, {as: 'Drive_Units', foreignKey: 'car_id'});
model.hasOne(Contacts, {as: 'Contacts', foreignKey: 'car_id'});
model.hasMany(Photos, {as: 'Photos', foreignKey: 'car_id'});

//belongsTo

Cities.belongsTo(Cars, {foreignKey: 'card_id'});
Markas.belongsTo(Markas, {foreignKey: 'card_id'});
Body_Type.belongsTo(Body_Type, {foreignKey: 'card_id'});
Cities.belongsTo(Cars, {foreignKey: 'card_id'});
Cities.belongsTo(Cars, {foreignKey: 'card_id'});
Cities.belongsTo(Cars, {foreignKey: 'card_id'});


export default model;


