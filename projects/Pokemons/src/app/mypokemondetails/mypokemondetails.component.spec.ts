import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypokemondetailsComponent } from './mypokemondetails.component';

describe('MypokemondetailsComponent', () => {
  let component: MypokemondetailsComponent;
  let fixture: ComponentFixture<MypokemondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypokemondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypokemondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
