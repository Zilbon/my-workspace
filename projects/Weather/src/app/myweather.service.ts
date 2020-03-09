import { Injectable } from '@angular/core';
import { ICity } from './myweather/ICity';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

/* const cityList = require('./city.list'); */


@Injectable({
  providedIn: 'root'
})
export class MyweatherService {
  private selectedCity: ICity;
  private cityBehaviorSubject: BehaviorSubject<ICity>
  private listOfCities: Observable<ICity[]>


  defaultCity: ICity;

  constructor(private http: HttpClient) {
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

  getCities(): Observable<ICity[]> {
    this.listOfCities = this.fetchList();
    console.log("SERVICE GETCITIES this.listOfCities");
    console.log(this.listOfCities);
    //return this.listOfPokemons;
    return this.listOfCities;

  }
  fetchList(): Observable<ICity[]> {

    // pas de subscribe, pour pouvoir retourner l'observable
    var test = this.http.get<ICity[]>('./assets/city.list.json');
    console.log(test);
    return test;
  }
  /**/ 
  getCity(CityId: string): Observable<ICity> {

    return this.fetchDetails(CityId);

  }
  

  fetchDetails(CityId): Observable<ICity> {
    this.selectedCity              /*PROBLEME*/ 
    console.log("WEATHER fetchDetails city param:");
    console.log(this.selectedCity);
    let selectedCity= this.http.get<ICity>('https://api.openweathermap.org/data/2.5/forecast' + CityId.toString(),
      {
        params: {
          appid: '509c893460bdb3f5b7b4788456054e20',


          id: this.selectedCity.id.toString(), 
          units: 'metric',
          cnt: '10'
        },
       
      }).subscribe(data => {

        Object.assign(this.selectedCity, data); 

        console.log("this.selectedCity APRES Object.assign: ");
        console.log(this.selectedCity);


      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log(err);
          }
        });

      return CityId;
        


        

        



  }
}
