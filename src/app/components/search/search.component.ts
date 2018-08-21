import { Component, OnInit, ViewChild } from '@angular/core';

import { Hero } from '../../models';
import { Thumbnail, Url } from '../../models/hero';
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

  constructor(private heroService: HeroService) {}

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

  GoToWebsite(urls: Url[]) {
    const url = urls.find(u => u.type === 'detail');
    window.open(url.url, '_blank');
  }

  GetImageUrl(thumbnail: Thumbnail) {
    const url = `${thumbnail.path}.${thumbnail.extension}`;
    return url.replace('http:', '');
  }
}
