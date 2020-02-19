import { Injectable } from '@angular/core';
import { ICity } from './myweather/ICity';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyweatherService {
  private selectedCity: ICity;
  private cityBehaviorSubject: BehaviorSubject<ICity>

  defaultCity: ICity;

  constructor() {
    this.defaultCity = {
      id: 6145489,
      name: "Shawinigan",
      country: "CA",
      coord: {
        lon: -72.74913,
        lat: 46.56675
      }

    };

    this.selectedCity = this.defaultCity;

    this.cityBehaviorSubject = new BehaviorSubject(this.selectedCity);


  }

  getVille() {
    console.log("MyweatherService getVille : defaultCity=");
    console.log(this.defaultCity);

    return this.defaultCity;
  }

  getSelectedCity(): Observable<ICity> {
    return this.cityBehaviorSubject.asObservable();
  }

  setSelectedCity(selectedCity: ICity) {
    this.selectedCity = selectedCity;
    this.cityBehaviorSubject.next(selectedCity);
  }

}
