import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MeasurementDialog } from './measuredialog/measuredialog.component';
import { HealthService } from 'src/app/services/health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private healthService: HealthService
  ) {}

  measurement: string;
  date: Date;
  value: number;

  HeartRateValue = this.healthService.getLatestHeartRate().heartrate;
  HeartRateDate = this.healthService.getLatestHeartRate().date.toLocaleString();
  HeartRateTitle = 'Average Heart Rate';
  HeartRateValueTitle = 'bpm';

  WeightTitle = 'Weight';
  WeightValueTitle = 'kg';
  WeightValue = this.healthService.getLatestWeight().weight;
  WeightDate = this.healthService.getLatestWeight().date.toLocaleString();

  BloodPressureTitle = 'Average Blood Pressure';
  BloodPressureValueTitle = 'bpm';
  BloodPressureValue = this.healthService.getLatestBloodPressure().pressure;
  BloodPressureDate = this.healthService
    .getLatestBloodPressure()
    .date.toLocaleString();

  openMeasurementDialog() {
    const dialogRef = this.dialog.open(MeasurementDialog, {
      data: {
        measurement: this.measurement,
        date: this.date,
        value: this.value,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.value = result.value;
      this.measurement = result.measurement;
      this.date = result.date;
    });
  }
}
