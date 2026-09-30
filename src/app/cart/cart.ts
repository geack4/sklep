import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  imports: [MatIconModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  @Input() cart: any[] = [];

  @Output() removeFromCart = new EventEmitter<any>();

  removeProduct(product: any) {
    this.removeFromCart.emit(product);
  }

  getTotal() {
    return this.cart.reduce((sum, product) => sum + product.price, 0);
  }
}
