import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyWeatherDetailsComponent } from './myweatherdetails.component';
import { MyWeatherComponent } from '../myweather/myweather.component';


const routes: Routes = [
  {path: 'myweatherdetails',component: MyWeatherDetailsComponent},
  {path: 'myweather', component: MyWeatherComponent}
];

@NgModule({
/*   imports: [RouterModule.forRoot(routes,
    { enableTracing: true } )],
  exports: [RouterModule] */


   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class MyweatherdetailsRoutingModule { }
