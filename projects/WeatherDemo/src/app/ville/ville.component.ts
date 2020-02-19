import { Component, OnInit } from '@angular/core';

import * as cityList from '../meteo/city.list.json';
import { ICity } from '../ICity';
import { VilleService } from '../ville.service.js';


@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})

export class VilleComponent implements OnInit {
  listOfCities;
  defaultCity;
  selectedCity: ICity;

  constructor(private villeservice: VilleService) {
    this.listOfCities = cityList;

    /* this.selectedCity = {
      id: 6145489,
      name: "Shawinigan",
      country: "CA",
      coord: {
        lon: -72.74913,
        lat: 46.56675
      }
    }; */

    console.log("CITY constructor this.selectedCity: ")
    console.log(this.selectedCity);

  }


  ngOnInit() {
    this.villeservice.getSelectedCity().subscribe(
      value => {
        this.selectedCity = value;
      }
    );
 
    this.listOfCities = cityList;
    console.log("Liste Des Villes:")
    console.log(this.listOfCities)

  }

  onSelect(event, city): void {
    this.villeservice.setSelectedCity(city);

    console.log("CITY onSelect event: ");
    console.log(event);
    console.log("CITY onSelect selected city object: ");
    console.log(city);

    console.log("CITY onSelect selected city name: " + this.selectedCity.name);

  }


}
