import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Result, Thumbnail, Url } from '../../models';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input()
  hero: Result;
  @Output()
  heroId: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  GoToWebsite(urls: Url[]) {
    const url = urls.find(u => u.type === 'detail');
    window.open(url.url, '_blank');
  }

  GetImageUrl(thumbnail: Thumbnail) {
    const url = `${thumbnail.path}.${thumbnail.extension}`;
    return url.replace('http:', '');
  }

  DeleteHeroById(id: number) {
    this.heroId.emit(id);
  }
}
