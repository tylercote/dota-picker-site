import { Hero } from './hero';

export class Team {
  isRadiant: boolean;
  // pool: Hero[];
  picks: Hero[];
  bans: Hero[];
  suggestedPicks: Map<Hero, number>;

  constructor(isRadiant: boolean) {
    this.isRadiant = isRadiant;
    this.suggestedPicks = new Map<Hero, number>();
    for (let i = 0; i < heroes.length; i++) {
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
