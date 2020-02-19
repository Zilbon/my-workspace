import { TestBed } from '@angular/core/testing';

import { MyweatherService } from './myweather.service';

describe('MyweatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyweatherService = TestBed.get(MyweatherService);
    expect(service).toBeTruthy();
  });
});
