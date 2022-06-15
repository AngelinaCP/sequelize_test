import db from '../db'
import {Model, DataTypes} from "sequelize";

class Contacts extends Model {

}

const model = Contacts.init({
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        unique: true
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
    descriptopn: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    car_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        foreignKey: true
    },
    sequelize: db,
    tableName: 'contacts'
});

export default model;