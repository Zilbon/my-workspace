import { Component, OnInit } from '@angular/core';
import * as cityList from './city.list.json';
import { ICity } from './ICity';
import { MyweatherService } from '../myweather.service';


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

  constructor(private meteo : MyweatherService) {
    console.log("CITY constructor this.selectedCity: ")
    console.log(this.selectedCity);
  }


  ngOnInit() {
    this.listOfCities = cityList;
    console.log("Liste Des Villes:");
    console.log(this.listOfCities);

  }

  onSelect(event): void {
    this.listOfCities.default.forEach(c =>{
      if(c.name == event)
        this.meteo.setSelectedCity(c);
    });
  }
}
