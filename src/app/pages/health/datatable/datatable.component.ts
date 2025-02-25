import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent {
  @Input() title="";
  @Input() displayedColumns: string[] = [];
  @Input() dataSource = []
}
