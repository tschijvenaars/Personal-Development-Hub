export class HeartRate {
  public heartrate: number;
  public date: Date;
  public id: number;

  constructor(heartrate: number, date: Date) {
    this.heartrate = heartrate;
    this.date = date;
    this.id = 1;
  }
}
