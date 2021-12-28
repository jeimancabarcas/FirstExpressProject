const faker = require('faker');
const boom = require('@hapi/boom')

const pool = require('./../lib/postgres')

class ProductService {
  // Private field to product list
  #PRODUCTS_LIST = [];
  constructor() {
    this.#generateData();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err))
  }

  //Private method to generate data
  #generateData() {
    for (let i = 0; i < 100; i++) {
      this.#PRODUCTS_LIST.push(
        {
          id: i,
          name: faker.commerce.productName(),
          productDescription: faker.commerce.productDescription(),
          price: Number(faker.commerce.price()),
          imageUrl: faker.image.imageUrl()
        }
      );
    }
  }

  async findAll() {
    const response = await this.pool.query(`SELECT * FROM products`);
    return response.rows;
  }

  async findById(id) {
    const result = this.#PRODUCTS_LIST.find((item) => item.id  === Number(id));
    return result ? result : {};
  }

  async findFilteredByMaxPrice(maxPrice) {
    if (maxPrice) {
      const result = this.#PRODUCTS_LIST.filter((item) => item.price  <= maxPrice);
      return result ? result : []
    }else {
      throw boom.notFound('Product not found');
    }
  }
}

module.exports = ProductService;
