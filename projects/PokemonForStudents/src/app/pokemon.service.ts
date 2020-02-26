import { Injectable } from '@angular/core';
import { IPokemon } from './IPokemon';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  defaultPokemon;
  private pokemonBehaviorSubject: BehaviorSubject<IPokemon>;
  private selectedPokemon: IPokemon;
  private listOfPokemons: Observable<IPokemon[]>


  constructor(private http: HttpClient) {
    this.defaultPokemon = {
      name: "balbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"

    }
    this.selectedPokemon = this.defaultPokemon;
    this.pokemonBehaviorSubject = new BehaviorSubject(this.selectedPokemon);
  }



  getSelectedPokemon(): Observable<IPokemon> {
    return this.pokemonBehaviorSubject.asObservable();
  }
  setSelectedPokemon(selectedPokemon: IPokemon) {
    this.selectedPokemon = selectedPokemon;
    this.pokemonBehaviorSubject.next(selectedPokemon);
  }

  getPokemons(): Observable<IPokemon[]> {
    this.listOfPokemons = this.fetchList();
    console.log("SERVICE GETPOKEMONS this.listOfPokemons");
    console.log(this.listOfPokemons);
    //return this.listOfPokemons;
    return this.listOfPokemons;

  }

  fetchList(): Observable<IPokemon[]> {

    // pas de subscribe, pour pouvoir retourner l'observable
    return this.http.get<IPokemon[]>('https://pokeapi.co/api/v2/pokemon/');
  }
  /*
  * Obtenir les détails d'un pokemon selectionne
  * params:
  *     name: string - nom du pokemon selectionne
  * return:
  *   Observable de type IPokemon
  */
  getPokemon(pokName): Observable<IPokemon> {

    return this.fetchDetails(pokName);

  }
  /*
   * Fetch les détails d'un pokemon selectionne
   * params:
   *     name: string - nom du pokemon selectionne
   * return:
   *   Observable de type IPokemon
   */

  fetchDetails(pokName): Observable<IPokemon> {
    let selectedPokemon = this.http.get<IPokemon>("https://pokeapi.co/api/v2/pokemon/" + pokName.toString());
    console.log("POK-SERVICE fetchDetails selectedPokemon = ");
    console.log(selectedPokemon);
    return selectedPokemon;


  }





}
