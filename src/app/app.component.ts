import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemons);
     this.selectPokemon(this.pokemons[1]);
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log(`Vous avez cliqué sur le pkemeon ${pokemon.name}`);
  }
}
