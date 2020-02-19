import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MeteoComponent} from './meteo/meteo.component';


const routes: Routes = [
  { path: 'test-observable', component: TestObservableComponent },
  /* { path: 'meteo-courant/:id', component: MeteoCourantComponent }, */
{ path: 'meteo/:id', component: MeteoComponent },
  {
    redirectTo: '/test-observer',
    pathMatch: 'full',
    path: '',
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    /*  {enableTracing : true} */
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
