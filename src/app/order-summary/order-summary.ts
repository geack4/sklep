import { Component, inject } from '@angular/core';
import { StoreService } from '../store';

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss',
})
export class OrderSummary {
  store = inject(StoreService);
  ngOnDestroy() {
    this.store.order = {};
  }
  ngOnInit() {
    console.log('order summary');
    console.log(this.store.order);
  }
}
