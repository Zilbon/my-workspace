import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyweathercurrentComponent } from './myweathercurrent.component';

describe('MyweathercurrentComponent', () => {
  let component: MyweathercurrentComponent;
  let fixture: ComponentFixture<MyweathercurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyweathercurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyweathercurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
