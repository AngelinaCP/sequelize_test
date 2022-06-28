import Sequelize, { DataTypes, Model } from 'sequelize';
import db from '../db';
import Body_Type from './Body_Type';
import Contacts from './Contacts';
import Drive_Unit from './Drive_Unit';
const Cities = require('./Cities')
const Photos = require('./Photos')
import Makes from './Make';
import Models from './Models';
import transmission from './transmission';

class Cars extends Model {

}

const model = Cars.init({
    id: {
        type: DataTypes.STRING, 
        primaryKey: true, 
      },
    spec_card: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
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
    mileageKm: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT,
        // allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE },
    updated_at: {
        type: DataTypes.DATE },
    }, {
        sequelize: db,
        modelName: 'cars'
    },
);
// Cars.associate = (models) => {
//     // associations can be defined here
//     Cars.hasOne(models.Cities, {
//       as: 'city',
//       foreignKey: 'car_id',
//     });
//   };

// Cars.Cities = Cars.hasOne(Cities, {as: 'city'});
model.hasOne(Cities, {as: 'city', foreignKey: 'car_id'});
model.hasOne(Makes, {as: 'make', foreignKey: 'car_id'});
model.hasOne(Models, {as: 'model',foreignKey: 'car_id'});
model.hasOne(Body_Type, {as: 'body_type',foreignKey: 'car_id'});
model.hasOne(transmission, {as: 'transmission',foreignKey: 'car_id'});
model.hasOne(Drive_Unit, {as: 'drive_unit',foreignKey: 'car_id'});
model.hasOne(Contacts, {as: 'contact',foreignKey: 'car_id'});
model.hasMany(Photos, {as: 'photo', foreignKey: 'car_id'});

//belongsTo

// Cities.Cars = Cities.belongsTo(Cars);
Cities.belongsTo(Cars, {as: 'city', foreignKey: 'car_id'});
Makes.belongsTo(Cars, {as: 'make', foreignKey: 'car_id'});
Body_Type.belongsTo(Cars, {as: 'body_type',foreignKey: 'car_id'});
Drive_Unit.belongsTo(Cars, {as: 'drive_unit',foreignKey: 'car_id'});
Photos.belongsTo(Cars, {as: 'photo', foreignKey: 'car_id'});
transmission.belongsTo(Cars, {as: 'transmission',foreignKey: 'car_id'});
Contacts.belongsTo(Cars, {as: 'contact',foreignKey: 'car_id'});
Models.belongsTo(Cars, {as: 'model', foreignKey: 'car_id'});

module.exports = model;


