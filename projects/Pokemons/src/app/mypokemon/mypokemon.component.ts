import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemons';
import { POKEMON } from './mock-pokemons';
import { from } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IPokemon } from '../IPokemon'

@Component({
  selector: 'app-mypokemon',
  templateUrl: './mypokemon.component.html',
  styleUrls: ['./mypokemon.component.css']
})
export class MypokemonComponent implements OnInit {

  selectedPokemon: Pokemon;
  pokemonTableau = POKEMON;
  pokemonTest: Pokemon;
  pokemons: IPokemon[];
  
  constructor(private http: HttpClient) {

    this.pokemonTest = {
      id: 123,
      name: "Balbusar"
    };
    this.pokemonTest.name = "Balbusar";
    /*console.log(this.pokemonTest);*/
  }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/',
      {
      }).subscribe(data => {
        this.pokemons = data.results;
        console.log(this.pokemons);
        console.log(data)
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log(err);
          }
        });
  }

onSelect(pok: Pokemon): void {
  this.selectedPokemon = pok;
} 

}
   





