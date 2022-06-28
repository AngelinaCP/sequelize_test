import Sequelize, { DataTypes, Model } from 'sequelize';
const Cars = require('./Cars')
import db from '../db';


class Drive_unit extends Model {

}

const model = Drive_unit.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        // allowNull: false,
    },
    car_id: {
        fields: 'car_id',
        type: DataTypes.STRING,
        foreignKey: true,
        
      }
}, {
    sequelize: db,
    tableName: 'drive_unit'
});

module.exports = model;