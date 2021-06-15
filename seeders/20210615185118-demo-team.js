'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teams', [
      {
        username:'Omaha',
        password: 'noah32',
        name: 'Omaha FC',
        division: 'Primary',
        img:'',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};
