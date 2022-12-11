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
import { SoloMetricComponent } from './pages/health/solo-metric/solo-metric.component';
import { GraphComponent } from './pages/health/graph/graph.component';
import { ListComponent } from './pages/home/list/list.component';
import { DatatableComponent } from './pages/health/datatable/datatable.component';
import { MeasurementDialog } from './pages/health/measuredialog/measuredialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ToDoListService } from './services/todolist.service';
import { WishListService } from './services/wishlist.service';
import { HealthService } from './services/health.service';
import { OpenWeatherService } from './services/openweather.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HealthComponent,
    LoginComponent,
    HomeComponent,
    WeatherComponent,
    SoloMetricComponent,
    GraphComponent,
    ListComponent,
    DatatableComponent,
    MeasurementDialog,
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
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
  ],
  providers: [
    AuthGuard,
    ToDoListService,
    WishListService,
    HealthService,
    OpenWeatherService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
