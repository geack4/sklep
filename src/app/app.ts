import { Component, inject } from '@angular/core';
import { ProductListComponent } from './product-list/product-list';
import { CartComponent } from './cart/cart';
import { Router, RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { StoreService } from './store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
