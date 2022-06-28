import Sequelize, { DataTypes, Model } from 'sequelize';
const Cars = require('./Cars')
import db from '../db';

class Models extends Model {

}

const model = Models.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        unique: true,
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
    tableName: 'models'
    });

module.exports = model;