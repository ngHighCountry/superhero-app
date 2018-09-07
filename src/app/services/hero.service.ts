import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) {}

  SearchHeros(searchTerm: string): Observable<Hero> {
    return this.http
      .get<Hero>(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=695089213e7003ca510a2849092d0ca7&nameStartsWith=${searchTerm}`
      )
      .pipe(map(response => response));
  }

  GetHero(heroId: string): Observable<Hero> {
    console.log(heroId);
    return this.http
      .get<Hero>(
        `https://gateway.marvel.com:443/v1/public/characters/${heroId}?apikey=695089213e7003ca510a2849092d0ca7`
      )
      .pipe(map(response => response));
  }
}
