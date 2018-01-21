import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }


  /*
  Returns an array of all Hero objects with current matchups.
   */
  getHeroes(): Hero[] {
    interface ItemsResponse {
      results: string[];
    }
    var heroes = [];
    this.http.get('/https://www.dotabuff.com/heroes').subscribe(data => {
      this.results = data.results;
    })
    return heroes;
  }



}
