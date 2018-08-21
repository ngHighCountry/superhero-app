import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Result } from '../../models';

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

  heroToDelete(id: string) {
    this.deleteHero.emit(id);
  }
}
