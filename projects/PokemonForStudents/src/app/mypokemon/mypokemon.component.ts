import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
//import { POKEMON } from './mock-pokemons';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-mypokemon',
  templateUrl: './mypokemon.component.html',
  styleUrls: ['./mypokemon.component.css']
})
export class MypokemonComponent implements OnInit {

  /*   pokemon: Pokemon = {
      id: 1,
      name: "Ditto"
    };
   */
  //pokemons = POKEMON;
  pokemons;
  pokemonsDetails;
  

  selectedPokemon: Pokemon;

  constructor(private http: HttpClient, private pokemonservice: PokemonService) { 
    
  }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/',
      {

      }).subscribe(data => {

        this.pokemons = data;

        // iterer dans l'objet pour obtenir l'url de chaque pokemon


        //console.log(element);



        console.log(this.pokemons);
        //console.log(this.pokemonsDetails);

      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log(err);
          }
        });
  }

  onSelect(pokName: String): void {
    this.pokemons.results.forEach(pokemon => {
      if(pokemon.name == pokName){
        this.pokemonservice.setSelectedPokemon(pokemon);
      }
    });
  }
}