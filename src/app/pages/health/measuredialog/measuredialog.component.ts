import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  measurement: string;
  date: Date;
  value: number;
}

interface MeasuementSelector {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-measuredialog',
  templateUrl: './measuredialog.component.html',
  styleUrls: ['./measuredialog.component.css'],
})
export class MeasurementDialog {
  constructor(
    public dialogRef: MatDialogRef<MeasurementDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.date = new Date();
    data.value = 0;
    data.measurement = 'Weight';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick() {
    console.log(
      'All values: ' +
        this.data.date +
        ' and ' +
        this.data.value +
        ' and ' +
        this.data.measurement
    );
  }

  measurementSelectors: MeasuementSelector[] = [
    { value: 'bloodpressure-0', viewValue: 'Blood Pressure' },
    { value: 'heartrate-1', viewValue: 'Heart Rate' },
    { value: 'weight-2', viewValue: 'Weight' },
    { value: 'inbodymuscle-3', viewValue: 'InBody Muscle Mass' },
    { value: 'inbodyfatpercentage-4', viewValue: 'InBody Fat Percentage' },
    { value: 'inbodyfatmass-5', viewValue: 'InBody Fat Mass' },
    { value: 'inbodybmi-6', viewValue: 'InBody BMI' },
  ];
}
