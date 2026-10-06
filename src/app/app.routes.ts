import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ProductPage } from './product-page/product-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'product/:id',
    component: ProductPage,
  },
];
