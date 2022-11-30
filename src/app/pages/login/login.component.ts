import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  maskPassword = true;
  username = '';
  password = '';

  constructor(private authService: AuthGuard, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.username = '';
      this.password = '';
      console.log('login worked');
      this.router.navigate(['/home']);
    } else {
      return;
    }
  }
}
