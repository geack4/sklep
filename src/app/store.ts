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

  cart: any[] = [];

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

    this.cart = this.cart
      .map((item) =>
        item.product.id === product.id ? { ...item, count: item.count + amount } : item,
      )
      .filter((item) => item.count > 0);
  }
}
