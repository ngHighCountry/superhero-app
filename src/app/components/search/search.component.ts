import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heros: Hero;
  @ViewChild('searchTerm')
  searchTerm;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {}

  Search() {
    this.heroService
      .SearchHeros(this.searchTerm.nativeElement.value)
      .subscribe(data => (this.heros = data));
  }

  DeleteHeroById(id: number) {
    const index = this.heros.data.results.findIndex(hero => hero.id === id);

    if (index !== -1) {
      this.heros.data.results.splice(index, 1);
    }
  }

  GoToDetails(id: string) {
    this.router.navigate([`/details/${id}`]);
  }
}
