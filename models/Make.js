import Sequelize, { DataTypes, Model } from 'sequelize';
const Cars = require('./Cars')
import db from '../db';

class Makes extends Model {

}

const model = Makes.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    car_id: {
        fields: 'car_id',
        type: DataTypes.STRING,
        foreignKey: true,
        
      }
}, {
    sequelize: db,
    tableName: 'makes'
});

module.exports = model;