import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss'
})
export class ProductItemComponent {

  @Input() product: any;

  @Output() addToCart = new EventEmitter<any>();

  addProduct() {
    this.addToCart.emit(this.product);
  }
}