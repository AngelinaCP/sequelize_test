import Sequelize, { DataTypes, Model } from 'sequelize';

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
        allowNull: false,
    },
    car_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        foreignKey: true
    }}, {
    sequelize: db,
    tableName: 'drive_unit'
});

export default model;