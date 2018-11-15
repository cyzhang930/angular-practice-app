import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero/hero.service'
import { Hero } from '../hero/hero'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
   // this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
   this.heroService.getRealHeros().subscribe((data: Hero[]) => this.heroes = data);
  }

}
