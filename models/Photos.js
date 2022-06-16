import db from '../db.js';
import Sequelize, {Model, DataTypes} from "sequelize";

class Photos extends Model {

}

const model = Photos.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        unique: true
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