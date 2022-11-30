export class Plant {
  plantName: string;
  description: string;
  potSize: number;
  soil: string;
  sunLight: string;
  plantedDate: Date;
  lastWatered: Date;

  constructor(
    plantName: string,
    description: string,
    potSize: number,
    soil: string,
    sunLight: string,
    plantedDate: Date,
    lastWatered: Date
  ) {
    this.plantName = plantName;
    this.description = description;
    this.potSize = potSize;
    this.soil = soil;
    this.sunLight = sunLight;
    this.plantedDate = plantedDate;
    this.lastWatered = lastWatered;
  }
}
