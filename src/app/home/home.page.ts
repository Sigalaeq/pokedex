import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private pokemonService: PokeapiService, private router: Router) { }
  Pokemondata: any;

  ngOnInit() {
    this.pokemonService.getListPokemones().subscribe((data) => {
      this.Pokemondata = data.results;
      console.log(data.results);
    });
  }

  obtenerId(url: any) {
    const regex = /\/(\d+)\//;
    const match = url.match(regex);

    if (match) {
      return match[1];
    } else {
      return "no se encontro tilin";
    }
  }

  verDetalle(url: string) {
    console.log(url);
    this.router.navigate(['/detalle', this.obtenerId(url)]);
  }
}
