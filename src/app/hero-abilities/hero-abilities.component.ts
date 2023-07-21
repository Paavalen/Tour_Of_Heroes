import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-abilities',
  templateUrl: './hero-abilities.component.html',
  styleUrls: [ './hero-abilities.component.css' ]
})
export class HeroAbilitiesComponent implements OnInit {
  @Input()hero: Hero | undefined;
  ability: string |undefined ;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
   // this.fetchAbility();
  }

  fetchAbility(): void {
    if (this.hero) {
      this.heroService.getHeroAbility(this.hero.id).subscribe((ability) => {
        this.ability = ability;
      });
    }
  }
}

