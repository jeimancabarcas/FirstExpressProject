const faker = require('faker');

class ProductService {
  // Private field to product list
  #PRODUCTS_LIST = [];

  constructor() {
    this.#generateData();
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
    return this.#PRODUCTS_LIST;
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
      throw new Error('Parameter maxPrice is not valid.');
    }
  }
}

module.exports = ProductService;
