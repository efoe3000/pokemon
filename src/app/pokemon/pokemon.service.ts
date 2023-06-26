import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemons(): Pokemon[] {
    return POKEMONS
  }

  getpokemonById(id: number): Pokemon|undefined {
    return POKEMONS.find(pokemon =>pokemon.id == id);
  }

  getPokemonTypes(): string[] {
    return [
      'palnte', 
      'feu',
      'Insecte',
      'Normal',
      'Electrik',
      'Poisson',
      'Fée',
      'Vol',
      'Comabt', 
    ];
  }
}
