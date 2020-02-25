import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CombatCenterComponent} from '../combat-center/combat-center.component';
import {MypokemonComponent} from './mypokemon/mypokemon.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component'



const routes: Routes = [
  /* { path: 'combat-center', component: CombatCenterComponent }, */
  { path: 'mypokemon', component: MypokemonComponent },
  {
    path: '',
    redirectTo: '/mypokemon',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } )],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
