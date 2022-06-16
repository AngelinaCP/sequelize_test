import db from '../db.js';
import Sequelize, {Model, DataTypes} from 'sequelize';

class Body_type extends Model {

}

const model = Body_type.init({
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
    tableName: 'body_type'
});


export default model;