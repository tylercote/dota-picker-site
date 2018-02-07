import {Component, OnChanges, OnInit} from '@angular/core';
import { Team } from '../model/team';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-radiant-picks',
  templateUrl: './radiant-picks.component.html',
  styleUrls: ['./radiant-picks.component.css']
})
export class RadiantPicksComponent implements OnInit, OnChanges {

  picks;

  constructor(public heroService: HeroService) {}

  ngOnInit() {
    this.picks = [];
  }

}
