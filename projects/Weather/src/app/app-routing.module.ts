import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyWeatherComponent} from './myweather/myweather.component'
import {MyWeatherDetailsComponent} from './myweatherdetails/myweatherdetails.component'
import {MyweathercurrentComponent} from './myweatherdetails/myweathercurrent/myweathercurrent.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'



const routes: Routes = [
{path: 'ville', component: MyWeatherComponent},
{path: 'details/:id', component:MyWeatherDetailsComponent},
{path: 'courante/:id', component: MyweathercurrentComponent },
{
  path:'',
  redirectTo:'/ville',
  pathMatch:'full'
},
{path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    /* { enableTracing: true } */ )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
