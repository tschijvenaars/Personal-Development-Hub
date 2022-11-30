export class BloodPressure {
  public pressure: string; // lower/higher bound
  public date: Date;
  public id: number;

  constructor(pressure: string, date: Date) {
    this.pressure = pressure;
    this.date = date;
    this.id = 1;
  }
}
