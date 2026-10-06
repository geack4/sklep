import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoreService } from '../store';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-product-page',
  imports: [RouterLink, MatIconModule, MatIconModule, MatIconButton],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
})
export class ProductPage {
  private route = inject(ActivatedRoute);
  store = inject(StoreService);

  id = this.route.snapshot.paramMap.get('id');
  product = this.store.products.find((product) => product.id === Number(this.id));

  ngOnInit() {
    console.log(this.id);
    console.log(this.product);
  }

  dodaj() {
    this.store.addProductToCart(this.product);
  }
}
