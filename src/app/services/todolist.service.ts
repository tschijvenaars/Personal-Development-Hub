import { ToDo } from '../models/todo.model';

export class ToDoListService {
  todoList: ToDo[] = [];

  filter: 'all' | 'active' | 'done' = 'all';

  constructor() {
    this.todoList = [
      new ToDo('install Node JS', '', false, Math.floor(Math.random()*90000) + 10000+''),
      new ToDo('install Angular CLI', '', false, Math.floor(Math.random()*90000) + 10000+''),
      new ToDo('create App', '', false, Math.floor(Math.random()*90000) + 10000+''),
      new ToDo('Serve App', '', false, Math.floor(Math.random()*90000) + 10000+''),
    ];
  }

  public getToDoList() {
    return this.todoList;
  }

  public getItemsOnFilter(filter: string) {
    if (filter === 'all') {
      return this.todoList;
    }
    return this.todoList.filter((item) =>
      filter === 'done' ? item.completed : !item.completed
    );
  }

  public addToDo(description: string) {
    this.todoList.unshift(
      new ToDo(description, '', false, Math.floor(Math.random()*90000) + 10000+'')
    );
  }

  public removeFromToDo(index: number) {
    this.todoList.splice(index, 1);
  }
}
