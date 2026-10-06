import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';
import { StoreService } from '../store';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent {
  store = inject(StoreService);

  @Input() products: any[] = [];

  @Output() addToCart = new EventEmitter<any>();

  addProduct(product: any) {
    this.addToCart.emit(product);
  }
}
