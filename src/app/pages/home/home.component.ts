import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
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
          cols1: 2,
          rows1: 1,
          cols2: 1,
          rows2: 1,
          cols3: 1,
          rows3: 2,
          cols4: 1,
          rows4: 1,
        },
      ];
    })
  );
}
