import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItemComponent {
  @Input() product: any;

  @Output() addToCart = new EventEmitter<any>();
}
