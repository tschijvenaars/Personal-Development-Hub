import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css'],
})
export class PlantsComponent {

  constructor(
    private sharedService: SharedService
  ) {
    this.sharedService.setTitle('Plants');
  }
  plantList = [
    {
      plantName: 'Succulent',
      description:
        'Succulent is a cactus-like plant that grows in hot, dry climates. It is cultivated in subtropical regions around the world, including the southern border areas of Texas, New Mexico, Arizona, and California.',
      potSize: 539,
      price: '$190',
      days: '30',
      diameter: '4.7"',
      humidity: '70%',
      height: '4.2"',
      image: "assets/plant.png"
    },
    {
      plantName: 'Plant2',
      description:
        'Plant2 is a cactus-like plant that grows in hot, dry climates. It is cultivated in subtropical regions around the world, including the southern border areas of Texas, New Mexico, Arizona, and California.',
      potSize: 345,
      price: '$130',
      days: '30',
      diameter: '4.7"',
      humidity: '70%',
      height: '4.2"',
      image: "assets/plant.png"
    },
    {
      plantName: 'Plant3',
      description:
        'Plant3 is a cactus-like plant that grows in hot, dry climates. It is cultivated in subtropical regions around the world, including the southern border areas of Texas, New Mexico, Arizona, and California.',
      potSize: 789,
      price: '$190',
      days: '30',
      diameter: '4.7"',
      humidity: '70%',
      height: '4.2"',
      image: "assets/plant.png"
    },
    {
      plantName: 'Plant4',
      description:
        'Plant4 is a cactus-like plant that grows in hot, dry climates. It is cultivated in subtropical regions around the world, including the southern border areas of Texas, New Mexico, Arizona, and California.',
      potSize: 90,
      price: '$190',
      days: '30',
      diameter: '4.7"',
      humidity: '70%',
      height: '4.2"',
      image: "assets/plant.png"
    },
  ];
  selectedPlant = this.plantList[0];
}
