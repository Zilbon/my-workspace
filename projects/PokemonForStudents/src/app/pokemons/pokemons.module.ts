import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypokemonComponent} from './mypokemon/mypokemon.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {FormsModule} from '@angular/forms';
import { PokemonsRoutingModule } from './pokemons-routing.module';



@NgModule({
  declarations: [
    MypokemonComponent,
    PokemonDetailComponent
  ],
  imports: [
    FormsModule,
   PokemonsRoutingModule,
    CommonModule
  ]
})
export class PokemonsModule { }
