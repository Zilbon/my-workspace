import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherDemo';
  transferData;

  onValueChange($event){
    console.log("App onValueChange event = ");
   console.log($event);
   this.transferData = $event;
  }
}
