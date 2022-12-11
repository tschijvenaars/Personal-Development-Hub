import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MeasurementDialog } from './measuredialog/measuredialog.component';
import { HealthService } from 'src/app/services/health.service';
import { HeartRate } from 'src/app/models/heartrate.model';
import { Weight } from 'src/app/models/weight.model';
import { BloodPressure } from 'src/app/models/bloodpressure.model';

export interface DialogData {
  measurement: string;
  date: Date;
  value: number;
}

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private healthService: HealthService
  ) {}

  ngOnInit(): void {
    this.heartRates = this.healthService.getHeartRateList();
    this.weights = this.healthService.getWeightList();
    this.bloodPressures = this.healthService.getBloodPressureList();
  }

  measurement: string;
  date: Date;
  value: number;

  heartRateTitle = 'Average Heart Rate';
  heartRateValueTitle = 'bpm';
  heartRates: HeartRate[] = [];

  weightTitle = 'Weight';
  weightValueTitle = 'kg';
  weights: Weight[] = [];

  bloodPressureTitle = 'Average Blood Pressure';
  bloodPressureValueTitle = 'mmHg';
  bloodPressures: BloodPressure[] = [];

  openMeasurementDialog() {
    const dialogRef = this.dialog.open(MeasurementDialog, {
      data: {
        measurement: this.measurement,
        date: this.date,
        value: this.value,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      try {
        if (result.measurement == 'Weight') {
          this.healthService.setWeight(Number(result.value), result.date);
          console.log('Set weight');
        } else if (result.measurement == 'Blood Pressure') {
          this.healthService.setBloodPressure(
            result.value.toString(),
            result.date
          );
          console.log('Set bloodpressure');
        } else if (result.measurement == 'Heart Rate') {
          this.healthService.setHeartRate(Number(result.value), result.date);
          console.log('Set heartrate');
        }
      } catch (err) {
        console.log(err);
      }
    });
  }
}
