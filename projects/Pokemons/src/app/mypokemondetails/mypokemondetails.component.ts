import { Component, OnInit, Input} from '@angular/core';
import {Pokemon} from '../pokemons';
import { from } from 'rxjs';
import{IPokemon} from '../IPokemon'


@Component({
  selector: 'app-mypokemondetails',
  templateUrl: './mypokemondetails.component.html',
  styleUrls: ['./mypokemondetails.component.css']
})
export class MypokemondetailsComponent implements OnInit {
  
  @Input() pokemon : IPokemon;

  
;
  constructor() { }

  ngOnInit() {
  }
  

}
