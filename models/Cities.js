import db from '../db.js';
import {Model, DataTypes} from "sequelize";

class Cities extends Model {

}

const model = Cities.init({
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
    tableName: 'cities'
});

export default model;