import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';
import { Team } from '../model/team';

@Component({
  selector: 'app-radiant-picks',
  templateUrl: './radiant-picks.component.html',
  styleUrls: ['./radiant-picks.component.css']
})
export class RadiantPicksComponent implements OnInit {

  team: Team;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.team =  {
      isRadiant: true,
      // pool: this.heroService.getHeroes(),
      picks: [],
      bans: [],
      suggestedPicks: new Map()
    };
  }

}
