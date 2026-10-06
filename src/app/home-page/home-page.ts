import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list';
import { StoreService } from '../store';
import { CartComponent } from '../cart/cart';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductListComponent, CartComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  store = inject(StoreService);
}
