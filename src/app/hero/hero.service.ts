import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClienet: HttpClient) { }
  
  getHeros(): Observable<Hero[]> {
    return of(HEROES);
  }

  getRealHeros() {
    return this.httpClienet.get('assets/heros.json');
  }
}
