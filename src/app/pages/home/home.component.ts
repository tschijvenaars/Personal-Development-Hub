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

  todoList: ToDo[] = [];
  wishList: Wish[] = [];

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
            cols: 1,
            cols1: 1,
            rows1: 1,
            cols2: 1,
            rows2: 1,
            cols3: 1,
            rows3: 1,
            cols4: 1,
            rows4: 1,
          },
        ];
      }

      return [
        {
          cols: 2,
          cols1: 1,
          rows1: 1,
          cols2: 1,
          rows2: 1,
          cols3: 2,
          rows3: 1,
          cols4: 2,
          rows4: 1,
        },
      ];
    })
  );
}
