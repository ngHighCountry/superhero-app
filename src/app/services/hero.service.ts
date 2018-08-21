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
        `http://www.superheroapi.com/api.php/10217168513831025/search/${searchTerm}`
      )
      .pipe(map(response => response));
  }
}
