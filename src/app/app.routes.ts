import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ProductPage } from './product-page/product-page';
import { KoszykPage } from './koszyk-page/koszyk-page';
import { SiteNotFound } from './site-not-found/site-not-found';
import { PaymentPage } from './payment-page/payment-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'product/:id',
    component: ProductPage,
  },
  {
    path: 'koszyk',
    component: KoszykPage,
  },
  {
    path: 'payment',
    component: PaymentPage,
  },
  {
    path: '**',
    component: SiteNotFound,
  },
];
