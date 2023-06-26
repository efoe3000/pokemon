import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemons : Pokemon[];
  pokemon: Pokemon|undefined;
  constructor(private route:ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
   const pokemennID: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemennID) {
      this.pokemon = this.pokemonService.getpokemonById(+pokemennID);
    }
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }
}
