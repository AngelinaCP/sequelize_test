import db from '../db.js';
import Sequelize, {Model, DataTypes} from "sequelize";

class Drive_unit extends Model {

}

const model = Drive_unit.init({
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
    tableName: 'drive_unit'
});

export default model;