'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('cars', {
       id: {
         type: DataTypes.INTEGER.UNSIGNED,
         primaryKey: true,
         autoIncrement: true
       },
       spec_card: {
         type: Sequelize.BOOLEAN,
         allowNull: false,
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
       mileage: {
         type: Sequelize.STRING
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
