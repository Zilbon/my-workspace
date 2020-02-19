import { Injectable } from '@angular/core';
import { Observable,of, from, BehaviorSubject } from 'rxjs';
import { ICity } from './ICity';


@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private cityBehaviorSubject: BehaviorSubject<ICity>

  private selectedCity: ICity;

  defaultCity;
 // selectedCityFromCity;
 
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
 
    console.log("VILLE.SERVICE constructor: defaultCity = ");
    console.log(this.defaultCity);
 
  }
  getSelectedCity() : Observable<ICity>{
    console.log("VILLE.SERVICE getSelectedCity")
    return this.cityBehaviorSubject.asObservable();
  }

   getVille(){
    console.log("VILLE.SERVICE getVille");
    console.log(this.defaultCity);
    return this.defaultCity; 

  }
  setSelectedCity(selectedCity: ICity){
    this.selectedCity = selectedCity;
    this.cityBehaviorSubject.next(selectedCity);
  }
}
 
