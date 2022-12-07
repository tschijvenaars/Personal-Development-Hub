import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
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
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
