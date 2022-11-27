import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './pages/health/health.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { AuthGuard } from './services/auth.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, //canActivate: [AuthGuard] },
  { path: 'health', component: HealthComponent }, //canActivate: [AuthGuard] },
  { path: 'weather', component: WeatherComponent }, //canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
