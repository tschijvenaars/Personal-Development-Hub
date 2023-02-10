import { Wish } from '../models/wish.model';

export class WishListService {
  wishList: Wish[] = [];

  filter: 'all' | 'active' | 'done' = 'all';

  constructor() {
    this.wishList = [
      new Wish('install Node JS', '', false, Math.floor(Math.random()*90000) + 10000+''),
      new Wish('install Angular CLI', '', false, Math.floor(Math.random()*90000) + 10000+''),
      new Wish('create App', '', false, Math.floor(Math.random()*90000) + 10000+''),
      new Wish('Serve App', '', false, Math.floor(Math.random()*90000) + 10000+''),
    ];
  }

  public getWishList() {
    return this.wishList;
  }

  public getItemsOnFilter(filter: string) {
    if (filter === 'all') {
      return this.wishList;
    }
    return this.wishList.filter((item) =>
      filter === 'done' ? item.completed : !item.completed
    );
  }

  public addWish(description: string) {
    this.wishList.unshift(
      new Wish(description, '', false, Math.floor(Math.random()*90000) + 10000+'')
      );
  }

  public removeFromWish(index: number) {
    this.wishList.splice(index, 1);
  }
}
