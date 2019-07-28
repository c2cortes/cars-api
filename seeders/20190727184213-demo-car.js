'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkInsert('Cars', [
        {
          identification  : '111',
          color           : 'red',
          motorparkId     : 1,
          createdAt       : new Date(),
          updatedAt       : new Date()
        },
        {
          identification  : '222',
          color           : 'black',
          motorparkId     : 2,
          createdAt       : new Date(),
          updatedAt       : new Date()
        },
        {
          identification  : '333',
          color           : 'white',
          motorparkId     : 1,
          createdAt       : new Date(),
          updatedAt       : new Date()
        },
        {
          identification  : '444',
          color           : 'grey',
          motorparkId     : 2,
          createdAt       : new Date(),
          updatedAt       : new Date()
        }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkDelete('Cars', null, {});
    
  }
};
