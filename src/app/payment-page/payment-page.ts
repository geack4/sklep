import { Component, inject, signal, OnInit } from '@angular/core';
import { StoreService } from '../store';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  imports: [FormsModule],
  templateUrl: './payment-page.html',
  styleUrl: './payment-page.scss',
})
export class PaymentPage {
  constructor(private router: Router) {}

  store = inject(StoreService);
  paymentMethod = signal('blik');

  blik = '';

  card = {
    number: '',
    date: '',
    ccv: '',
  };

  daneInit() {
    return {
      time: '',
      imie: '',
      nazwisko: '',
      telefon: '',
      email: '',
      ulica: '',
      numerDomu: '',
      kodPocztowy: '',
      miasto: '',
      uwagi: '',
      payment: {} as {
        type?: string;
        blik?: string;
        cardNumber?: string;
        cardExpiry?: string;
        ccv?: string;
        amount?: number;
      },
    };
  }

  dane = this.daneInit();

  submitDelivery() {
    const pm = this.paymentMethod();

    if (pm === 'blik') {
      this.dane.payment = {
        type: 'blik',
        blik: this.blik,
      };
    } else if (pm === 'card') {
      this.dane.payment = {
        type: 'card',
        cardNumber: this.card.number,
        cardExpiry: this.card.date,
        ccv: this.card.ccv,
      };
    }

    if (this.dane.payment.type) {
      this.dane.time = Date.now().toString();
      this.dane.payment.amount = this.store.getTotal();
      this.store.codeUsed = null;
      console.log(this.dane);
      this.store.order = this.dane;
      console.log('order ', this.store.order);
      this.dane = this.daneInit();
      console.log(this.dane);

      this.store.cart = [];

      this.router.navigate(['/summary']);
    }
  }

  checkTotal() {
    if (this.store.getTotal() <= 0) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.checkTotal();
  }

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);
    this.paymentMethod.set(value);
  }

  formatBlik(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value
      .replace(/[^0-9]/g, '')
      .slice(0, 6)
      .replace(/^([0-9]{3})([0-9])/, '$1 $2');
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value
      .replace(/[^0-9]/g, '')
      .slice(0, 16)
      .replace(/([0-9]{4})/g, '$1 ')
      .trim();
  }

  formatPhoneNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value
      .replace(/[^0-9]/g, '')
      .slice(0, 9)
      .replace(/([0-9]{3})/g, '$1 ')
      .trim();
  }

  formatExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value
      .replace(/[^0-9]/g, '')
      .slice(0, 4)
      .replace(/([0-9]{2})/g, '$1/')
      .replace(/\/$/, '');
  }

  formatPostalCode(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value
      .replace(/[^0-9]/g, '')
      .slice(0, 5)
      .replace(/^([0-9]{2})([0-9])/, '$1-$2')
      .trim();
  }

  formatCCV(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 4);
  }
}
