import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';
import { Wish } from 'src/app/models/wish.model';
import { ToDoListService } from 'src/app/services/todolist.service';
import { WishListService } from 'src/app/services/wishlist.service';
import { OpenWeatherService } from 'src/app/services/openweather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private todoService: ToDoListService,
    private wishService: WishListService,
    private openWeatherService: OpenWeatherService
  ) {}

  ngOnInit(): void {
    this.todoList = this.todoService.getToDoList();
    this.wishList = this.wishService.getWishList();
  }

  todoListTitle = 'To Do List';
  todoFieldLabel = 'Add To Do';
  todoPlaceholder = 'E.g. call for reservation...';
  todoList: ToDo[] = [];

  wishListTitle = 'Wish List';
  wishFieldLabel = 'Add Wish';
  wishPlaceholder = 'E.g. go horseriding...';
  wishList: Wish[] = [];

  getCurrentWeather() {
    this.openWeatherService.makeDemoCall();
  }

  addTodo(newItem: string) {
    this.todoService.addToDo(newItem);
  }

  removeToDo(index: number) {
    this.todoService.removeFromToDo(index);
  }

  addWish(newItem: string) {
    this.wishService.addWish(newItem);
  }

  removeWish(index: number) {
    this.wishService.removeFromWish(index);
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
