import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTempratureComponent } from './weekly-temprature.component';

describe('WeeklyTempratureComponent', () => {
  let component: WeeklyTempratureComponent;
  let fixture: ComponentFixture<WeeklyTempratureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyTempratureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyTempratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
