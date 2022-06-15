'use strict';

const {DataTypes} = require("sequelize/types");
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('photos', {
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
       }});
       await queryInterface.createTable('contacts', {
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
           type: Sequelize.TEXT,
           allowNull: false,
         },
         car_id: {
           type: DataTypes.BIGINT(20).UNSIGNED,
           foreignKey: true
         }
       });
    await queryInterface.createTable('body_type', {
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
      }
    });
    await queryInterface.createTable('cities', {
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
      }
    });
    await queryInterface.createTable('drive_unit', {
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
      }
    });
    await queryInterface.createTable('marka', {
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
      }
    });
    await queryInterface.createTable('models', {
      id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        primaryKey: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marka_id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        foreignKey: true
      }
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
