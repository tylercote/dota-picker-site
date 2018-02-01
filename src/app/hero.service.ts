import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HeroService {

  heroes: Hero[];

  constructor(private http: HttpClient) { }

  /*
  Returns an array of all Hero objects with current matchups.
   */
  getHeroes(): Hero[] {
    // this.http.get('/https://www.dotabuff.com/heroes').subscribe(data => data.json);
    // this.heroes = ;
    return;
  }

  /*
  Pushes the given hero to the global hero array. Makes available to pick.
   */
  pushHero(hero: Hero) {
    if (!this.heroesContains(hero)) {
      this.heroes.push(hero);
    }
  }

  /*
  Pops the given hero off the global hero array. Makes unavailable to pick.
   */
  popHero(heroToRemove: Hero) {
    this.heroes = this.heroes.filter(hero => hero !== heroToRemove);
  }

  heroesContains(hero: Hero): boolean {
    for (let i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i] === hero) {
        return true;
      }
    }
    return false;
  }
}
