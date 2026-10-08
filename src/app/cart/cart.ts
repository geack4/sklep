import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreService } from '../store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [MatIconModule, MatIconButton, RouterLink],
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

  changeAmount(product: any, amount: number) {
    this.changeProductAmount.emit({ product, amount });
  }
}
