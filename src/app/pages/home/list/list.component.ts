import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatListOption } from '@angular/material/list';
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
  @Input() elements: any[];

  inputFieldValue = '';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem() {
    if (this.inputFieldValue != null && this.inputFieldValue.length > 2) {
      this.newItemEvent.emit(this.inputFieldValue);
      this.inputFieldValue = '';
    }
  }
}
