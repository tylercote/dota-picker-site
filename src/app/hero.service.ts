import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {

  heroes: Hero[];
  pickedHeros: Hero[];

  constructor(private http: HttpClient) {
    this.pickedHeros = [];
  }

  /*
  Returns an array of all Hero objects with current matchups.
   */
  getHeroes(): Hero[] {

    // let cheerio = require('cheerio');
    // let jsonframe = require('jsonframe-cheerio');
    //
    // let $ = cheerio.load('/https://www.dotabuff.com/heroes');
    // jsonframe($);
    //
    // var frame = {
    //   'heroes': {
    //     'selector': '.a [href=/heroes/*]',
    //     'data': [{
    //       'properName': '.div .name',
    //       'url': ''
    //     }]
    //   }
    // }
    return [];
  }

  /*
  Pushes the given hero to the global hero array. Makes available to pick.
   */
  unpickHero(heroToUnpick: Hero) {
    this.heroes.push(heroToUnpick);
    this.pickedHeros = this.pickedHeros.filter(hero => hero !== heroToUnpick);
  }

  /*
  Pops the given hero off the global hero array. Makes unavailable to pick.
   */
  pickHero(heroToPick: Hero) {
    this.heroes = this.heroes.filter(hero => hero !== heroToPick);
    this.pickedHeros.push(heroToPick);
  }
}
