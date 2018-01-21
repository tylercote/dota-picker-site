import { Hero } from './hero';
export class Team {
  isRadiant: boolean;
  picks: Hero[];
  bans: Hero[];
  suggestedPicks: Map<Hero, number>;
}
