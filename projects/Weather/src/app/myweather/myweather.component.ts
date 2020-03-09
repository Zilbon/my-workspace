import { Component, OnInit } from '@angular/core';
/* import * as cityList from './city.list.json'; */
import { ICity } from './ICity';
import { MyweatherService } from '../myweather.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-myweather',
  templateUrl: './myweather.component.html',
  styleUrls: ['./myweather.component.css']
})

export class MyWeatherComponent implements OnInit {
  listOfCities;
  defaultCity;
  selectedCity: ICity;
  selectedCityFromService;
  City$:Observable<ICity>

  constructor(private meteo : MyweatherService) {
    console.log("CITY constructor this.selectedCity: ")
    console.log(this.selectedCity);
  }


  ngOnInit() {
    this.meteo.getCities().subscribe(
      (value) =>{
        this.listOfCities = value;
        console.log("CITIES subscribe to getCities value =")
        console.log(value);


      }
 


   




    );

   

  }

  onSelect(event): void {
    this.listOfCities.default.forEach(c =>{
      if(c.name == event)
        this.meteo.setSelectedCity(c);
    });
  }
}
