import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list';
import { CartComponent } from './cart/cart';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
