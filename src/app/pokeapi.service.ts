import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeapiService {

  private pokeapiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0';

  constructor(private http: HttpClient) { }

  getListPokemones(): Observable<any> {
    {
      return this.http.get(this.pokeapiURL);
    }
  }
}
