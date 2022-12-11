import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class OpenWeatherService {
  lat = 52.0789181;
  lon = 4.3596872;
  apiKey = '45617ddb848311a882efd55a6013d5ff';
  //   url ='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API key}';
  result: any;

  constructor(private http: HttpClient) {}

  makeUrl() {
    return (
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      this.lat +
      '&lon=' +
      this.lon +
      '&units=metric&appid=' +
      this.apiKey
    );
  }

  makeDemoCall() {
    this.http.get<any>(this.makeUrl()).subscribe((data) => {
      console.log(data);
    });
  }
}
