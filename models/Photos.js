import Sequelize, { DataTypes, Model } from 'sequelize';

import db from '../db';

class Photos extends Model {

}

const model = Photos.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        unique: true,
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
        type: DataTypes.INTEGER.UNSIGNED,
        foreignKey: true
    }}, {
    sequelize: db,
    tableName: 'photos'
});

export default model;