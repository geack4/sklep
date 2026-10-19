import { Component, inject, signal } from '@angular/core';
import { StoreService } from '../store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-page',
  imports: [FormsModule],
  templateUrl: './payment-page.html',
  styleUrl: './payment-page.scss',
})
export class PaymentPage {
  store = inject(StoreService);
  paymentMethod = signal('blik');

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);
    this.paymentMethod.set(value);
  }
}
