import db from '../db.js';
import {Model, DataTypes} from "sequelize";

class Drive_unit extends Model {

}

const model = Drive_unit.init({
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
    tableName: 'drive_unit'
});

export default model;