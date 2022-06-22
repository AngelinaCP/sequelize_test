import Sequelize, { DataTypes, Model } from 'sequelize';

import db from '../db';


class Transmission extends Model {

}

const model = Transmission.init({
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
    tableName: 'transmission'
});

export default model;