import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MeasurementDialog } from './measuredialog/measuredialog.component';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {}

  animal: string;

  HeartRateValue = '52';
  HeartRateTitle = 'Average Heart Rate';
  HeartRateValueTitle = 'bpm';

  WeightTitle = 'Weight';
  WeightValueTitle = 'kg';
  WeightValue = '91';

  BloodPressureTitle = 'Average Blood Pressure';
  BloodPressureValueTitle = 'bpm';
  BloodPressureValue = '80/120';

  openMeasurementDialog() {
    const dialogRef = this.dialog.open(MeasurementDialog, {
      data: { animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
