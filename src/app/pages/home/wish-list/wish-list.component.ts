import { Component } from '@angular/core';
import { Wish } from 'src/app/models/wish.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  wishList: Wish[] = [
    new Wish('feest4', false),
    new Wish('feest1', false),
    new Wish('feest2', false),
    new Wish('feest3', false),
  ];
}
