import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  imports: [MatIconModule, MatIconButton],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  @Input() cart: any[] = [];

  @Output() removeFromCart = new EventEmitter<any>();
  @Output() changeProductAmount = new EventEmitter<any>();

  removeProduct(product: any) {
    this.removeFromCart.emit(product);
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.product.price, 0);
  }
  changeAmount(product: any, amount: number) {
    this.changeProductAmount.emit({ product, amount });
  }
}
