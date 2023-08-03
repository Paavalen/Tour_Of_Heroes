import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.css']
})
export class HeroButtonComponent {

@Input() caption:String="Caption"
}
