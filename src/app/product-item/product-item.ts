import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreService } from '../store';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink, MatIconButton, MatIconModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItemComponent {
  @Input() product: any;

  @Output() addToCart = new EventEmitter<any>();

  store = inject(StoreService);

  dodaj() {
    this.store.addProductToCart(this.product);
  }
}
