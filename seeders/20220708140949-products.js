'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          product_name: 'Plain T-Shirt',
          price: 14.99,
          stock: 14,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: 'Running Sneakers',
          price: 90.0,
          stock: 25,
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: 'Branded Baseball Hat',
          price: 22.99,
          stock: 12,
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: 'Top 40 Music Compilation Vinyl Record',
          price: 12.99,
          stock: 50,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: 'Cargo Shorts',
          price: 29.99,
          stock: 22,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
