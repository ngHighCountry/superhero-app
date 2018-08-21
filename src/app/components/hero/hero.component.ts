import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Result } from '../../models';
import { Thumbnail, Url } from '../../models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input()
  hero: Result;
  @Output()
  deleteHero = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  heroToDelete(id: number) {
    this.deleteHero.emit(id);
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
