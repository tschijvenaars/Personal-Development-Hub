import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';
import { Wish } from 'src/app/models/wish.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
  todoListTitle = 'To Do List';
  todoFieldLabel = 'Add To Do';
  todoPlaceholder = 'E.g. call for reservation...';

  wishListTitle = 'Wish List';
  wishFieldLabel = 'Add Wish';
  wishPlaceholder = 'E.g. go horseriding...';

  todoList: ToDo[] = [
    new ToDo('todo'),
    new ToDo('todo'),
    new ToDo('todo'),
    new ToDo('todo'),
  ];
  wishList: Wish[] = [new ToDo('wish'), new ToDo('wish'), new ToDo('wish')];

  addTodo(newItem: string) {
    this.todoList.unshift(new ToDo(newItem));
    console.log(this.todoList);
  }

  addWish(newItem: string) {
    this.wishList.unshift(new Wish(newItem));
    console.log(this.wishList);
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            colsNum: 1,
            todoCol: 1,
            todoRow: 1,
            wishCol: 1,
            wishRow: 1,
            todayInfoCol: 1,
            todayInfoRow: 1,
            emptyCol: 1,
            emptyRow: 1,
          },
        ];
      }

      return [
        {
          colsNum: 3,
          todoCol: 1,
          todoRow: 1,
          wishCol: 1,
          wishRow: 1,
          todayInfoCol: 1,
          todayInfoRow: 2,
          emptyCol: 2,
          emptyRow: 1,
        },
      ];
    })
  );
}
