import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent {
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
