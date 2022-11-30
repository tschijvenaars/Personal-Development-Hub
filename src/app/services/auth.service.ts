import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('bearerToken');
    const expirationDate = localStorage.getItem('expiration');
    if (expirationDate != null) {
      try {
        const expDate = new Date(expirationDate);
        if (expDate.getTime() >= Date.now()) {
          if (token != null) {
            return true;
          }
        } else {
          this.clearAuthData();
        }
      } catch (e) {
        console.log(e);
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  secretUsername = 'test';
  secretPassword = 'test';
  date: Date;

  login(username: string, password: string) {
    if (this.secretUsername == username && this.secretPassword == password) {
      this.date = new Date(Date.now());
      this.date.setHours(this.date.getHours() + 3);
      this.setBearerToken('ijfpoaij3p9fp98ty9283f9732y9p8f', this.date);
      console.log('Login woks!');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private setBearerToken(token: string, expirationDate: Date) {
    localStorage.setItem('bearerToken', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('bearerToken');
    localStorage.removeItem('expiration');
  }
}
