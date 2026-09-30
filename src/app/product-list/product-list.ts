import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductListComponent {

  @Input() products: any[] = [];

  @Output() addToCart = new EventEmitter<any>();

  addProduct(product: any) {
    this.addToCart.emit(product);
  }
}