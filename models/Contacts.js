import Sequelize, { DataTypes, Model } from 'sequelize';

import db from '../db';


class Contacts extends Model {

}

const model = Contacts.init({
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
    mobile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    car_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        foreignKey: true
    }}, {
    sequelize: db,
    tableName: 'contacts'
});

export default model;