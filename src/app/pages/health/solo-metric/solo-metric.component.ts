import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solo-metric',
  templateUrl: './solo-metric.component.html',
  styleUrls: ['./solo-metric.component.css'],
})
export class SoloMetricComponent {
  @Input() title = '';
  @Input() valueTitle = '';
  @Input() value = '';
  @Input() date = '';
}
