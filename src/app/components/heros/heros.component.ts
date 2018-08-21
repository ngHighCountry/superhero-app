import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Hero } from '../../models';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  @Input()
  heros: Hero;
  constructor() {}

  @Output()
  deleteHero = new EventEmitter();

  ngOnInit() {}

  DeleteHero(id: number) {
    this.deleteHero.emit(id);
  }
}
