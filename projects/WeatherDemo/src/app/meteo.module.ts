import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MeteoComponent} from './meteo/meteo.component';



@NgModule({
  declarations: [
    MeteoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MeteoComponent
  ]
})
export class MeteoModule { }
