import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ToDo } from 'src/app/models/todo.model';
import { Wish } from 'src/app/models/wish.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() listName = '';
  @Input() formFieldLabel = '';
  @Input() inputPlaceholder = '';
  elements: any[] = [];
  inputFieldValue = '';

  onClick() {
    this.elements.unshift(new Wish(this.inputFieldValue));
    this.inputFieldValue = '';
  }

  onChangeDemo(ob: MatCheckboxChange) {
    console.log('checked: ' + ob.checked);
  }
}
