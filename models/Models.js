import Sequelize, { DataTypes, Model } from 'sequelize';

import db from '../db';

class Models extends Model {

}

const model = Models.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    marka_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        foreignKey: true
    },
    sequelize: db,
    tableName: 'models'
});

export default model;