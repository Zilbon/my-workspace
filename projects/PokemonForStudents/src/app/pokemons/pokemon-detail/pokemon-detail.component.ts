import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IPokemon } from '../IPokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnChanges {


  @Input() selectedPokemon;
  PokemonDetails;

  selectedPokemonFromService;

  //selectedPokemon: IPokemon;

  constructor(private http: HttpClient, private pokemonservice: PokemonService) {
    /* this.selectedPokemonFromService = pokemonservice.getPokemon(); */
    

    this.selectedPokemon = {
      name: "balbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    };

  }

  ngOnInit() {
    this.pokemonservice.getSelectedPokemon().subscribe(value =>{
      this.selectedPokemon = value;
      this.fetchDetails(this.selectedPokemon);
      console.log('subscribe pokemon' + this.selectedPokemon);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("POK DETAIL ngOnChanges changes param = ");
    console.log(changes);

    this.selectedPokemon = changes.selectedPokemon.currentValue;
    this.fetchDetails(this.selectedPokemon);
    console.log("POK DETAIL ngOnChanges this.selectedPokemon = ");
    console.log(this.selectedPokemon);

  }

  fetchDetails(pok) {
    this.http.get(pok.url,
      {
      }).subscribe((data) => {
        this.PokemonDetails = data;
        console.log(this.selectedPokemon);
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log(err);
          }
        });

  }

}
