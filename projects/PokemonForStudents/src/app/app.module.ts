import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MypokemonModule } from './mypokemon/mypokemon.module';
import { PokemonDetailsModule } from './pokemon-detail/pokemon-details.module';
import { PokemonService } from './pokemon.service';
import { CombatCenterComponent } from './combat-center/combat-center.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    CombatCenterComponent,
    PagenotfoundComponent,
    
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    PokemonsModule,
    AppRoutingModule,
    PokemonsModule
=======
    MypokemonModule,
    PokemonDetailsModule
>>>>>>> parent of ff15560... Pokemons module + routing
  ],
  
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent],
  exports: [CombatCenterComponent, PagenotfoundComponent]
})
export class AppModule {


}


