import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HealthComponent } from './pages/health/health.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './pages/home/todo-list/todo-list.component';
import { DayOverviewComponent } from './pages/home/day-overview/day-overview.component';
import { WishListComponent } from './pages/home/wish-list/wish-list.component';
import { WishAdderComponent } from './pages/home/wish-adder/wish-adder.component';
import { TodoAdderComponent } from './pages/home/todo-adder/todo-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HealthComponent,
    LoginComponent,
    HomeComponent,
    WeatherComponent,
    TodoListComponent,
    DayOverviewComponent,
    TodoAdderComponent,
    WishListComponent,
    WishAdderComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
