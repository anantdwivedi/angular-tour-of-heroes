import { Hero } from './hero';
// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

/*@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})*/
  
      @Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {

         ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}
   goBack(): void {
  this.location.back();
}

  @Input() hero: Hero;

    constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}

}
