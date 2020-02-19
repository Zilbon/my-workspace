import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ICity } from '../myweather/ICity';
import { MyweatherService } from '../myweather.service';



@Component({
  selector: 'app-myweatherdetails',
  templateUrl: `./myweatherdetails.component.html`,
  styleUrls: ['./myweatherdetails.component.css']
})
export class MyWeatherDetailsComponent implements OnInit {

  @Input() selectedCity: ICity;
 

  constructor(private http: HttpClient,private myweatherservice : MyweatherService) {
    console.log("WEATHER constructor");

    console.log("this.selectedCity = ");
    console.log(this.selectedCity);

    console.log("WEATHER constructor");

    console.log("this.selectedCity = ");
    console.log(this.selectedCity);

  }


  ngOnInit() {
    console.log("WEATHER ngOnInit AVANT fetchDetails");
    console.log("WEATHER this.selectedCity = ");
    console.log(this.selectedCity);

    this.myweatherservice.getSelectedCity().subscribe(value => {
      console.log("get service = ");
      console.log(value);
      this.selectedCity = value;
      this.fetchDetails();
    });    
  }
  fetchDetails() {

    console.log("WEATHER fetchDetails city param:");
    console.log(this.selectedCity);
    this.http.get('https://api.openweathermap.org/data/2.5/forecast',
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
  }


}
