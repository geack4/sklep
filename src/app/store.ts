import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  products = [
    { id: 1, name: 'Klawiatura', price: 199, img: 'klawiatura.jpg', desc: 'pisze' },
    { id: 2, name: 'Mysz', price: 99, img: 'mysz.jpg' },
    { id: 3, name: 'Monitor', price: 899, img: 'monitor.jpg' },
    { id: 4, name: 'Słuchawki', price: 149, img: 'sluchawki.jpg' },
  ];

  codes = [
    { code: '123456', mode: 'percantage', amount: 0.1 },
    { code: '654321', mode: 'flat', amount: 10 },
  ];

  codeUsed: any = null;

  cart: any[] = [];

  order: any = {};

  addProductToCart(product: any) {
    const existingProduct = this.cart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      this.cart = this.cart.map((item) =>
        item.product.id === product.id ? { ...item, count: item.count + 1 } : item,
      );
    } else {
      this.cart = [...this.cart, { product, count: 1 }];
    }
    console.log(this.cart);
  }

  removeProductFromCart(product: any) {
    this.cart = this.cart.filter((item) => item.product.id !== product.product.id);
  }

  changeProductAmount(params: any) {
    const { product, amount } = params;

    const temp = this.cart
      .map((item) =>
        item.product.id === product.id ? { ...item, count: item.count + amount } : item,
      )
      .filter((item) => item.count > 0);
    this.cart = temp;
  }

  getTotal() {
    var sum = this.cart.reduce((sum, item) => sum + item.product.price * item.count, 0);
    var discount = 0;
    var finalSum = sum;
    if (this.codeUsed) {
      discount = this.codeUsed.amount;
      if (this.codeUsed.mode === 'percantage') finalSum = sum - sum * discount;
      else if (this.codeUsed.mode === 'flat') finalSum = sum - discount;
    }
    return Math.max(finalSum, sum / 2);
  }

  getDiscount() {
    var sum = this.cart.reduce((sum, item) => sum + item.product.price * item.count, 0);
    var discount = 0;
    if (this.codeUsed) {
      discount = this.codeUsed.amount;
      if (this.codeUsed.mode === 'percantage') discount = sum * discount;
      else if (this.codeUsed.mode === 'flat') discount = discount;
    }
    return discount;
  }
}
