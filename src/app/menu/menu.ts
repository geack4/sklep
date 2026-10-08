import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, MatAnchor, MatIcon],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  cartCount = 1;
}
