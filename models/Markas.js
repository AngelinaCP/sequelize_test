import db from '../db.js';
import {Model, DataTypes} from "sequelize";

class Markas extends Model {

}

const model = Markas.init({
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    car_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        foreignKey: true
    },
    sequelize: db,
    tableName: 'Marka'
});

export default model;