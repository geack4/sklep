import { Component, inject } from '@angular/core';
import { CartComponent } from '../cart/cart';
import { RouterLink } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { StoreService } from '../store';

@Component({
  selector: 'app-koszyk-page',
  imports: [CartComponent, RouterLink, MatIconButton, MatIcon],
  templateUrl: './koszyk-page.html',
  styleUrl: './koszyk-page.scss',
})
export class KoszykPage {
  store = inject(StoreService);
}
