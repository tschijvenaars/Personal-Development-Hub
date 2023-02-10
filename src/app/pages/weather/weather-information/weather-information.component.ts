import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.css']
})
export class WeatherInformationComponent {

  tempratureData = {
    location: 'Gotham',
    time: '00:32 PM',
    rain: '24%',
    uv: '2',
    wind: '12Km/h',
    pressure: '720 hpa',
    temperature: '14°',
    tempratureDesc: 'Mostly Clear'
  }
}
