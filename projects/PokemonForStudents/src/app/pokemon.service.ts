import { Injectable } from '@angular/core';
import { IPokemon } from './IPokemon';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  defaultPokemon;
 private pokemonBehaviorSubject : BehaviorSubject<IPokemon>;
 private selectedPokemon : IPokemon;
  

  constructor() {
    this.defaultPokemon ={
      name: "balbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"

    }
       this.selectedPokemon = this.defaultPokemon;
       this.pokemonBehaviorSubject = new BehaviorSubject(this.selectedPokemon);
   }

  getPokemon(){
    console.log("POKEMON.SERVICE getPokemon")
    return this.selectedPokemon;

  }

  getSelectedPokemon(): Observable<IPokemon> {
    return this.pokemonBehaviorSubject.asObservable();
  }
  setSelectedPokemon(selectedPokemon: IPokemon){
    this.selectedPokemon = selectedPokemon;
    this.pokemonBehaviorSubject.next(selectedPokemon);
  }
  
}
