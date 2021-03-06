import Sequelize, { DataTypes, Model } from 'sequelize';

import db from '../db';


class Cities extends Model {

}

const model = Cities.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        unique: true
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
    tableName: 'cities'
});

export default model;