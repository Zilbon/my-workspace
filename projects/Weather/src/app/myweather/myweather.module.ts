import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWeatherComponent } from './myweather.component';
import {MyweatherRoutingModule} from './myweather-routing.module';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    MyWeatherComponent
  ],
  imports: [
    CommonModule,
    MyweatherRoutingModule
  ],
  exports:[
    MyWeatherComponent
  ]
})
export class MyweatherModule { }
