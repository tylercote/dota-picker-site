import { Component } from '@angular/core';
import { Hero } from './model/hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  heroes: Hero[] = [];
  // radiant: Team;
  // dire: Team;

  constructor(private heroService: HeroService) {
    this.heroes = heroService.getHeroes();
    // this.radiant = new Team(true);
    // this.dire = new Team(false);
  }
}
