import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MeasurementDialog } from './measuredialog/measuredialog.component';
import { HealthService } from 'src/app/services/health.service';
import { HeartRate } from 'src/app/models/heartrate.model';
import { Weight } from 'src/app/models/weight.model';
import { BloodPressure } from 'src/app/models/bloodpressure.model';
import { InBody } from 'src/app/models/inbody.model';
import { SharedService } from 'src/app/services/shared.service';

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
    private healthService: HealthService,
    private sharedService: SharedService
  ) {
    this.sharedService.setTitle('Health');
  }

  weightChartOptions = {
    series: [
      {
        name: "Weight",
        data: [500, 410, 350, 450, 550, 620, 400, 500, 540]
      }
    ],
    
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      colors: ["#008000"],
      curve: "smooth"
    },
    title: {
      text: "Weight",
      align: "left"
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };

  heartRateChartOptions = {
    series: [
      {
        name: "Heart Rate",
        data: [500, 410, 350, 450, 550, 620, 400, 500, 540]
      }
    ],
    
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      colors: ["#ff0000"],
      curve: "smooth"
    },
    title: {
      text: "Heart Rate",
      align: "left"
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };

  fatRateOptions = {
    series: [
      {
        name: "Fat Rate",
        data: [500, 410, 350, 450, 550, 620, 400, 500, 540]
      }
    ],
    
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      colors: ["#008000"],
      curve: "smooth"
    },
    title: {
      text: "Fat Rate",
      align: "left"
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };

  muscleRateChartOptions = {
    series: [
      {
        name: "Muscle Rate",
        data: [500, 410, 350, 450, 550, 620, 400, 500, 540]
      }
    ],
    
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      colors: ["#ff0000"],
      curve: "smooth"
    },
    title: {
      text: "Muscle Rate",
      align: "left"
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };

  weightResponse = {
    title: 'Weight',
    data: [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ],
    displayedColumns :['position', 'name', 'weight', 'symbol']
  };

  heartRateResponse = {
    title: 'Heart Rate',
    data: [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ],
    displayedColumns :['position', 'name', 'weight', 'symbol']
  };

  musclePercentResponse = {
    title: 'Muscle Percentage',
    data: [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ],
    displayedColumns :['position', 'name', 'weight', 'symbol']
  };

  fatPercentageResponse = {
    title: 'Fat Percentage',
    data: [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ],
    displayedColumns :['position', 'name', 'weight', 'symbol']
  };

  ngOnInit(): void {
    this.heartRates = this.healthService.getHeartRateList();
    this.weights = this.healthService.getWeightList();
    this.bloodPressures = this.healthService.getBloodPressureList();
    this.musclePercent = this.healthService.getInBodyList();
  }

  measurement: string;
  date: Date;
  value: number;

  heartRateTitle = 'Heart Rate';
  heartRateValueTitle = 'bpm';
  heartRates: HeartRate[] = [];

  weightTitle = 'Weight';
  weightValueTitle = 'kg';
  weights: Weight[] = [];

  bloodPressureTitle = 'Blood Pressure';
  bloodPressureValueTitle = 'mmHg';
  bloodPressures: BloodPressure[] = [];

  musclePercentTitle = 'Muscle Percentage';
  musclePercentValueTitle = '%';
  musclePercent: InBody[] = [];

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
        if (result === undefined) {
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
        }
      } catch (err) {
        console.log(err);
      }
    });
  }
}
