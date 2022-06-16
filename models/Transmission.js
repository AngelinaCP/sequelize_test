import db from '../db.js';
import Sequelize, {Model, DataTypes} from "sequelize";

class Transmission extends Model {

}

const model = Transmission.init({
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
    tableName: 'transmission'
});

export default model;