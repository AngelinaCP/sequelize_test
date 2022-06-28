import Sequelize, { DataTypes, Model } from 'sequelize';
const Cars = require('./Cars')
import db from '../db';

class Photos extends Model {

}

const model = Photos.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    alt: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    car_id: {
        fields: 'car_id',
        type: DataTypes.STRING,
        // foreignKey: true,
        
      }
}, {
    sequelize: db,
    tableName: 'photos'
});

module.exports = model;