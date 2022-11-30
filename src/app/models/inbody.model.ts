export class InBody {
  public muscleMass: number;
  public fatMass: number;
  public bodyFatPercentage: number;
  public bmi: number;
  public legLeanMass: number;
  public extracellularWater: number;
  public date: Date;
  public id: number;

  constructor(
    muscleMass: number,
    fatMass: number,
    bodyFatPercentage: number,
    bmi: number,
    legLeanMass: number,
    extracellularWater: number,
    date: Date
  ) {
    this.muscleMass = muscleMass;
    this.fatMass = fatMass;
    this.bodyFatPercentage = bodyFatPercentage;
    this.bmi = bmi;
    this.legLeanMass = legLeanMass;
    this.extracellularWater = extracellularWater;
    this.date = date;
    this.id = 1;
  }
}
