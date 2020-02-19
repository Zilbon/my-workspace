import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyweatherdetailsComponent } from './myweatherdetails.component';

describe('MyweatherdetailsComponent', () => {
  let component: MyweatherdetailsComponent;
  let fixture: ComponentFixture<MyweatherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyweatherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyweatherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
