'use strict';
import Sequelize, { DataTypes, Model } from 'sequelize';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('photos', {
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
       }});
       await queryInterface.createTable('contacts', {
         id: {
           type: DataTypes.INTEGER.UNSIGNED,
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
         description: {
           type: Sequelize.TEXT,
           allowNull: false,
         },
         car_id: {
           type: DataTypes.INTEGER.UNSIGNED,
           foreignKey: true
         }
       });
    await queryInterface.createTable('body_type', {
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
      }
    });
    await queryInterface.createTable('cities', {
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
      }
    });
    await queryInterface.createTable('drive_unit', {
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
      }
    });
    await queryInterface.createTable('marka', {
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
      }
    });
    await queryInterface.createTable('models', {
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
      }
    });
    await queryInterface.createTable('transmission', {
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
      }
    });

    await queryInterface.addConstraint('body_type', {
      fields: ['car_id'],
      type: 'foreign key',
      references: { table: 'cars', field: 'id' },
      onDelete: 'set null',
      onUpdate: 'restrict'
      //can use 'cascade' here
    });
    await queryInterface.addConstraint('cities', {
      fields: ['car_id'],
      type: 'foreign key',
      references: { table: 'cars', field: 'id' },
      onDelete: 'set null',
      onUpdate: 'restrict'
    });
    await queryInterface.addConstraint('contacts', {
      fields: ['car_id'],
      type: 'foreign key',
      references: { table: 'cars', field: 'id' },
      onDelete: 'set null',
      onUpdate: 'restrict'
    });
    await queryInterface.addConstraint('drive_unit', {
      fields: ['car_id'],
      type: 'foreign key',
      references: { table: 'cars', field: 'id' },
      onDelete: 'set null',
      onUpdate: 'restrict'
    });
    await queryInterface.addConstraint('marka', {
      fields: ['car_id'],
      type: 'foreign key',
      references: { table: 'cars', field: 'id' },
      onDelete: 'set null',
      onUpdate: 'restrict'
    });
    await queryInterface.addConstraint('models', {
      fields: ['marka_id'],
      type: 'foreign key',
      references: { table: 'marka', field: 'id' },
      onDelete: 'set null',
      onUpdate: 'restrict'
    });
    await queryInterface.addConstraint('photos', {
      fields: ['car_id'],
      type: 'foreign key',
      references: { table: 'cars', field: 'id' },
      onDelete: 'set null',
      onUpdate: 'restrict'
    });
    await queryInterface.addConstraint('transmission', {
      fields: ['car_id'],
      type: 'foreign key',
      references: { table: 'cars', field: 'id' },
      onDelete: 'set null',
      onUpdate: 'restrict'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('photos');
    await queryInterface.dropTable('body_type');
    await queryInterface.dropTable('cities');
    await queryInterface.dropTable('contacts');
    await queryInterface.dropTable('drive_unit');
    await queryInterface.dropTable('markas');
    await queryInterface.dropTable('models');
    await queryInterface.dropTable('photos');
  }
};
