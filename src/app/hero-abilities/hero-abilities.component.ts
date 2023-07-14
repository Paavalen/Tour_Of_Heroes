import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-abilities',
  templateUrl: './hero-abilities.component.html',
  styleUrls: ['./hero-abilities.component.css']
})
export class HeroAbilitiesComponent implements OnInit {
  abilities: string[];

  constructor(){
    this.abilities=[];
  }
  ngOnInit(){
    this.getHeroAbilities();
  }
  getHeroAbilities(){
    this.abilities=this.hero.abilities;
  }
}
