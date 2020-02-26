import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypokemonComponent } from './mypokemon.component';



@NgModule({
  declarations: [
    MypokemonComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    MypokemonComponent
  ]
})
export class MypokemonModule { }
