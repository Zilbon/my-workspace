import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { MyweatherdetailsRoutingModule } from './myweatherdetails-routing.module';
import { MyWeatherDetailsComponent } from './myweatherdetails.component';
import { MyweathercurrentComponent } from './myweathercurrent/myweathercurrent.component';
import { MyWeatherComponent } from '../myweather/myweather.component';


@NgModule({
  declarations: [
    MyWeatherComponent, /*JAI RAJOUTER LE MYWEATHERCOMPONENT*/ 
    MyWeatherDetailsComponent,
    MyweathercurrentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MyweatherdetailsRoutingModule


    
  ],
  exports:[
    MyWeatherDetailsComponent,
    MyweathercurrentComponent
  ]
})
export class MyweatherdetailsModule { }
