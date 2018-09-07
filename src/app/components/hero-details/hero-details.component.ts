import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero, Thumbnail } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.params;
    this.heroService
      .GetHero(routeParams.id)
      .subscribe(data => (this.hero = data));
  }

  GetImageUrl(thumbnail: Thumbnail) {
    const url = `${thumbnail.path}.${thumbnail.extension}`;
    return url.replace('http:', '');
  }
}
