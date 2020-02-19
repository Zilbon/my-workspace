import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ICity } from '../../myweather/ICity';
import { MyweatherService } from '../../myweather.service';


@Component({
  selector: 'app-myweathercurrent',
  templateUrl: './myweathercurrent.component.html',
  styleUrls: ['./myweathercurrent.component.css']
})
export class MyweathercurrentComponent implements OnInit {
  @Input() selectedCity: ICity;
  /* ngOnChanges(changes: SimpleChanges): void {

   
    console.log(changes.selectedCity.currentValue);
 
    this.selectedCity = changes.selectedCity.currentValue;
 
    console.log("WEATHER ngOnChanges this.selectedCity");
    console.log(this.selectedCity);
 
    this.fetchdetails();
  } */

  constructor(private http: HttpClient,private myweatherservice : MyweatherService) {
    console.log("WEATHER constructor");

    console.log("this.selectedCity = ");
    console.log(this.selectedCity);

    console.log("WEATHER constructor");

    console.log("this.selectedCity = ");
    console.log(this.selectedCity);
   }

  ngOnInit() {
    this.myweatherservice.getSelectedCity().subscribe(value => {
      console.log("get service = ");
      console.log(value);
      this.selectedCity = value;
      this.fetchdetails();
    });

  }
  fetchdetails(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather',{
      params:{
        units: 'metric',
        appid: '509c893460bdb3f5b7b4788456054e20',
        id:this.selectedCity.id.toString()
      },
    }).subscribe(data => {

      Object.assign(this.selectedCity, data); 

      console.log("current this.selectedCity APRES Object.assign: ");
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
