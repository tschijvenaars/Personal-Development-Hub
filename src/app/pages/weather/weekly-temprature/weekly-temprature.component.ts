import { Component } from '@angular/core';

@Component({
  selector: 'app-weekly-temprature',
  templateUrl: './weekly-temprature.component.html',
  styleUrls: ['./weekly-temprature.component.css']
})
export class WeeklyTempratureComponent {

   temperatureData = [
    {
      day: 'Tommorrow',
      temperature: '16°',
      date: '12 Apr',
      image: 'assets/plant.png'
    },
    {
      day: 'Monday',
      temperature: '16°',
      date: '13 Apr',
      image: 'assets/plant.png'
    },
    {
      day: 'Tuesday',
      temperature: '16°',
      date: '14 Apr',
      image: 'assets/plant.png'
    },
    {
      day: 'Wednesday',
      temperature: '16°',
      date: '15 Apr',
      image: 'assets/plant.png'
    },
    {
      day: 'Thursday',
      temperature: '16°',
      date: '16 Apr',
      image: 'assets/plant.png'
    },
    {
      day: 'Friday',
      temperature: '16°',
      date: '17 Apr',
      image: 'assets/plant.png'
    },
    {
      day: 'Saturday',
      temperature: '16°',
      date: '18 Apr',
      image: 'assets/plant.png'
    },
   ]
}
