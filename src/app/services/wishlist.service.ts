import { Wish } from '../models/wish.model';

export class WishListService {
  wishList: Wish[] = [];

  filter: 'all' | 'active' | 'done' = 'all';

  constructor() {
    this.wishList = [
      new Wish('wish1'),
      new Wish('wish2'),
      new Wish('wish3'),
      new Wish('wish4'),
      new Wish('wish5'),
      new Wish('wish6'),
      new Wish('wish7'),
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
    this.wishList.unshift(new Wish(description));
  }

  public removeFromWish(index: number) {
    this.wishList.splice(index, 1);
  }
}
