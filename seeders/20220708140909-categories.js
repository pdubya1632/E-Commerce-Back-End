'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          category_name: 'Shirts',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Shorts',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Music',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Hats',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Shoes',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
