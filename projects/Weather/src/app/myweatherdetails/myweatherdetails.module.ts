import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyweatherdetailsRoutingModule } from './myweatherdetails-routing.module';
import { MyWeatherDetailsComponent } from './myweatherdetails.component';
import { MyweathercurrentComponent } from './myweathercurrent/myweathercurrent.component';


@NgModule({
  declarations: [
    MyWeatherDetailsComponent,
    MyweathercurrentComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    MyWeatherDetailsComponent,
    MyweathercurrentComponent
  ]
})
export class MyweatherdetailsModule { }
