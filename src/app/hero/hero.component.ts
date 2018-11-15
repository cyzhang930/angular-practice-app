import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Arashi"
  };

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    
   }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(heroe: Hero) {
    console.log('Select ' + heroe.name)
    this.selectedHero = heroe;
  }  

}
