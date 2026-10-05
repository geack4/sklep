import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list';
import { CartComponent } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  products = [
    { id: 1, name: 'Klawiatura', price: 199 },
    { id: 2, name: 'Mysz', price: 99 },
    { id: 3, name: 'Monitor', price: 899 },
    { id: 4, name: 'Słuchawki', price: 149 },
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
  }

  removeProductFromCart(product: any) {
    this.cart = this.cart.filter((item) => item.product.id !== product.id);
  }

  changeProductAmount(params: any) {
    const product = params.product;
    const amount = params.amount;
    this.cart = this.cart
      .map((item) =>
        item.product.id === product.id ? { ...item, count: item.count + amount } : item,
      )
      .filter((item) => item.count > 0);
  }
}
