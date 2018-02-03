import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { Team } from './model/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroes: Hero[] = [];
  radiant: Team;
  dire: Team;
}
