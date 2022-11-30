export class Weather {
  humidity: number;
  temperature: number;
  windspeed: number;

  constructor(humidity: number, temperature: number, windspeed: number) {
    this.humidity = humidity;
    this.temperature = temperature;
    this.windspeed = windspeed;
  }
}
