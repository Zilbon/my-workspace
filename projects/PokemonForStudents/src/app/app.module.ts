import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';
import { CombatCenterComponent } from './combat-center/combat-center.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PokemonsModule } from './pokemons/pokemons.module';


@NgModule({
  declarations: [
    AppComponent,
    CombatCenterComponent,
    PagenotfoundComponent,
    
  ],
  imports: [

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PokemonsModule
  ],
  
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent],
  exports: [CombatCenterComponent, PagenotfoundComponent]
})
export class AppModule {


}


