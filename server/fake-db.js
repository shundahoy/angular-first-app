const Product = require("./model/Product");

class fakeDB {
  constructor() {
    this.products = [
      {
        name: "Phone XL",
        price: 799,
        cover: "./assets/img/phone-cover.jpg",
        description: "A large phone with one of the best screens",
        head1: "head1",
        head2: "head2",
        head3: "head3",
        headText1: "headText1",
        headText2: "headText2",
        headText3: "headText3",
      },
      {
        name: "Phone Mini",
        price: 699,
        cover: "./assets/img/phone-cover.jpg",
        description: "A great phone with one of the best cameras",
        head1: "head1",
        head2: "head2",
        head3: "head3",
        headText1: "headText1",
        headText2: "headText2",
        headText3: "headText3",
      },
      {
        name: "Phone Standard",
        price: 299,
        cover: "./assets/img/phone-cover.jpg",
        description: "description",
        head1: "head1",
        head2: "head2",
        head3: "head3",
        headText1: "headText1",
        headText2: "headText2",
        headText3: "headText3",
      },
    ];
  }
  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }
  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }
  seeDb() {
    this.pushProductsToDb();
  }
  async cleanDb() {
    await Product.deleteMany({});
  }
}

module.exports = fakeDB;
