import { Hero } from './hero';
import { HeroService } from '../hero.service';

export class Team {
  isRadiant: boolean;
  // pool: Hero[];
  picks: Hero[];
  bans: Hero[];
  suggestedPicks: Map<Hero, number>;

  constructor(isRadiant: boolean, private heroService: HeroService) {
    this.isRadiant = isRadiant;
    this.suggestedPicks = new Map<Hero, number>();
    for (let i = 0; i < heroService.heroes.length; i++) {
      this.suggestedPicks.
    }
  }

  calcSuggestedPicks () {
    // sort suggested picks by hero name alphabetically

    for (let i = 0; i < 5; i++) {
      if (this.picks[i] !== null) {
        this.picks[i].matchups;
      }
    }
  }
}
