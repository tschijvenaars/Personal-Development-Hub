import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthGuard } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  authService: AuthGuard;
  header: string = 'Home';

  constructor(
    private breakpointObserver: BreakpointObserver,
    authService: AuthGuard,
    private sharedService: SharedService
  ) {
    this.authService = authService;
    this.sharedService.title.subscribe(val => {
      this.header = val;
    })
  }
}
