import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() listName = '';
  @Input() formFieldLabel = '';
  @Input() inputPlaceholder = '';
  todos: ToDo[] = [
    new ToDo('todo 1', false),
    new ToDo('todo 2', false),
    new ToDo('todo 3', false),
    new ToDo('todo 1', false),
    new ToDo('todo 2', false),
    new ToDo('todo 3', false),
    new ToDo('todo 1', false),
    new ToDo('todo 2', false),
    new ToDo('todo 3', false),
  ];

  onClick() {
    this.todos.unshift(new ToDo('hoi', false));
  }

  onChangeDemo(ob: MatCheckboxChange) {
    console.log('checked: ' + ob.checked);
  }
}
