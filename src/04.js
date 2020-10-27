class Product {
  constructor(name, price, discountable) {
      this.name = name;
      this.price = price; 
      this.discountable = discountable;
  }  
}

console.log(new Product("Coffee Maker", 99, true))