import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private pokemonService: PokeapiService) { }
  Pokemondata: any;

  ngOnInit() {
    this.pokemonService.getListPokemones().subscribe((data) => {
      this.Pokemondata = data.results;
      console.log(data.results);
    });
  }

}
