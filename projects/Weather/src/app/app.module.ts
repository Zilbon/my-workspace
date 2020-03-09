import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MyweatherdetailsModule } from './myweatherdetails/myweatherdetails.module';
import { MyweatherModule } from './myweather/myweather.module';
import{MyweatherService} from './myweather.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     MyweatherdetailsModule,
   /* MyweatherModule */
  ],


  providers: [ MyweatherService],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent]
})
export class AppModule { }
