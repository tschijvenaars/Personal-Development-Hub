import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoList: ToDo[] = [
    new ToDo('feest1', false),
    new ToDo('feest2', false),
    new ToDo('feest3', false),
    new ToDo('feest4', false),
    new ToDo('feest1', false),
    new ToDo('feest2', false),
    new ToDo('feest3', false),
    new ToDo('feest4', false),
    new ToDo('feest1', false),
    new ToDo('feest2', false),
    new ToDo('feest3', false),
    new ToDo('feest4', false),
  ];
}
