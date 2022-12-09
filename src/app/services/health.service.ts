import { BloodPressure } from '../models/bloodpressure.model';
import { HeartRate } from '../models/heartrate.model';
import { InBody } from '../models/inbody.model';
import { Weight } from '../models/weight.model';

export class HealthService {
  weightList: Weight[];
  bloodPressureList: BloodPressure[];
  heartRateList: HeartRate[];
  inbodyList: InBody[];

  constructor() {
    this.weightList.push(new Weight(90.2, new Date()));
    this.bloodPressureList.push(new BloodPressure('80/120', new Date()));
    this.heartRateList.push(new HeartRate(52, new Date()));
    this.inbodyList.push(new InBody(20, 20, 20, 20, 20, 20, new Date()));
  }

  getWeightList() {
    return this.weightList;
  }

  getBloodpressureList() {
    return this.bloodPressureList;
  }

  getHeartrateList() {
    return this.heartRateList;
  }

  getInBodyList() {
    return this.inbodyList;
  }
}
