import { ToDo } from '../models/todo.model';

export class ToDoListService {
  todoList: ToDo[] = [];

  filter: 'all' | 'active' | 'done' = 'all';

  constructor() {
    this.todoList = [
      new ToDo('todo1'),
      new ToDo('todo2'),
      new ToDo('todo3'),
      new ToDo('todo4'),
      new ToDo('todo5'),
      new ToDo('todo6'),
      new ToDo('todo7'),
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
    this.todoList.unshift(new ToDo(description));
  }

  public removeFromToDo(index: number) {
    this.todoList.splice(index, 1);
  }
}
