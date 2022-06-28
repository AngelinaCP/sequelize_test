'use strict';

const {DataTypes} = require("sequelize");
const Sequelize = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('cars', {
       id: {
        // field: 'id',
         type: DataTypes.STRING,
         primaryKey: true,
        //  autoIncrement: true
       },
       spec_card: {
         type: Sequelize.BOOLEAN,
        //  allowNull: false,
       },
       engine: {
         type: Sequelize.STRING
       },
       year: {
         type: Sequelize.STRING
       },
       price: {
         type: Sequelize.STRING
       },
       color: {
         type: Sequelize.STRING
       },
       mileageKm: {
         type: Sequelize.STRING
       },
       description: {
         type: Sequelize.TEXT,
         allowNull: false,
       },
       created_at: {
         type: DataTypes.DATE },
       updated_at: {
         type: DataTypes.DATE },
     }, )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('cars');
  }
};
