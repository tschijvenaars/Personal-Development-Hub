export class Weight {
  public weight: number;
  public date: Date;
  public id: string;

  constructor(weight: number, date: Date, id?: string) {
    this.weight = weight;
    this.date = date;
    this.id = id;
  }
}
