import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreService } from '../store';

@Component({
  selector: 'app-cart',
  imports: [MatIconModule, MatIconButton],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  @Output() removeFromCart = new EventEmitter<any>();
  @Output() changeProductAmount = new EventEmitter<any>();

  store = inject(StoreService);
  cart = this.store.cart;

  removeProduct(product: any) {
    console.log(product);
    this.removeFromCart.emit(product);
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.product.price, 0);
  }
  changeAmount(product: any, amount: number) {
    this.changeProductAmount.emit({ product, amount });
  }
}
