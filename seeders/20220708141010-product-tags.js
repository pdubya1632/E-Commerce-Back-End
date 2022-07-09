'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ProductTags',
      [
        {
          product_id: 1,
          tag_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 1,
          tag_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 1,
          tag_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2,
          tag_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          tag_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          tag_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          tag_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          tag_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          tag_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          tag_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          tag_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 5,
          tag_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductTags', null, {});
  },
};
