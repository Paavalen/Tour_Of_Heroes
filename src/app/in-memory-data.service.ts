import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', ability:'a' },
      { id: 13, name: 'Bombasto', ability:'b' },
      { id: 14, name: 'Celeritas', ability:'c' },
      { id: 15, name: 'Magneta', ability:'d' },
      { id: 16, name: 'RubberMan', ability:'e' },
      { id: 17, name: 'Dynama', ability:'f' },
      { id: 18, name: 'Dr. IQ', ability:'g' },
      { id: 19, name: 'Magma', ability:'h' },
      { id: 20, name: 'Tornado', ability:'i' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
