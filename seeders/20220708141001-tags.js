'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tags',
      [
        {
          tag_name: 'rock music',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'pop music',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'green',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'white',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'gold',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_name: 'pop culture',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
