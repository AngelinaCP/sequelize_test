import Sequelize, { DataTypes, Model } from 'sequelize';
const Cars = require('./Cars')
import db from '../db';


class Cities extends Model {

}

const model = Cities.init({
    id: {
        field: 'car_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    car_id: {
        type: DataTypes.STRING,
        references: {
            model : 'cars',
            key: 'id'
        }
    }}
    ,{
    sequelize: db,
    modelName: 'city' }
);
// Cities.associate = (models) => {
//     // associations can be defined here
//     Cities.belongsTo(models.Cars, {
//       as: 'city',
//       foreignKey: 'car_id'
//     });
//   };
module.exports = model;