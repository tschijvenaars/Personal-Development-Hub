import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoList: ToDo[] = [
    new ToDo('Lorem Ipsum de uil van minerva is een paddenstoel', false),
    new ToDo('Lorem2 Ipsum2 de uil van minerva is een paddenstoel', false),
    new ToDo('Lorem3 Ipsum3 de uil van minerva is een paddenstoel', false),
    new ToDo('feest4', false),
    new ToDo('feest1', false),
    new ToDo('feest2', false),
    new ToDo('feest3', false),
    new ToDo('Lorem7 Ipsum de uil van minerva is een paddenstoel7', false),
    new ToDo('feest1', false),
    new ToDo('Lorem9 Ipsum9 de uil van minerva is een paddenstoel', false),
    new ToDo('feest3', false),
    new ToDo('feest4', false),
  ];

  onClick() {
    this.todoList.push(new ToDo('hoi', false));
  }
}
