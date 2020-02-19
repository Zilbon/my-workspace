import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWeatherComponent } from './myweather.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    MyWeatherComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyWeatherComponent
  ]
})
export class MyweatherModule { }
