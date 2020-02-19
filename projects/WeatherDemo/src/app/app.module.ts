import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { VilleComponent } from './ville/ville.component';
import { VilleModule } from './ville/ville.module';
import { TestObservableModule } from './test-observable/test-observable.module';
import { MeteoModule } from './meteo.module';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    TestObservableComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TestObservableModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  transferData;

  onValueChange($event){
    console.log("App onValueChange event = ");
    console.log($event);
    this.transferData = $event;
  }
}
