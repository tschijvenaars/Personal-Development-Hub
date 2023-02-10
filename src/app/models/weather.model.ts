export class Weather {
  humidity: number;
  temperature: number;
  windspeed: number;
  id:string;

  constructor(humidity: number, temperature: number, windspeed: number, id:string) {
    this.humidity = humidity;
    this.temperature = temperature;
    this.windspeed = windspeed;
    this.id = id;
  }
}
