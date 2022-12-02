import { Component } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent {
  HeartRateValue = '52';
  HeartRateTitle = 'Average Heart Rate';
  HeartRateValueTitle = 'bpm';
  WeightTitle = 'Weight';
  WeightValueTitle = 'kg';
  WeightValue = '91';
  BloodPressureTitle = 'Average Blood Pressure';
  BloodPressureValueTitle = 'bpm';
  BloodPressureValue = '80/120';
}
