import db from '../db'
import {Model, DataTypes} from "sequelize";

class Photos extends Model {

}

const model = Photos.init({
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
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
        type: DataTypes.BIGINT(20).UNSIGNED,
        foreignKey: true
    },
    sequelize: db,
    tableName: 'photos'
});

export default model;