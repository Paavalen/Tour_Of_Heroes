import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { HeroService } from '../app/hero.service';
import { of } from 'rxjs';
import { Hero } from '../app/hero';

const mockHeroService = {
  getHeroes: () => of([
    { id: 1, name: 'Hero 1' },
    { id: 2, name: 'Hero 2' },
    { id: 3, name: 'Hero 3' },
  ]),
  addHero: (hero: Hero) => of({ ...hero, id: 4 }),
  deleteHero: (id: number) => of(),
};

export default {
  title: 'Heroes',
  decorators: [
    moduleMetadata({
      declarations: [HeroesComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
    }),
  ],

};

export const Default = () => ({
  component: HeroesComponent,
});

export const AddHero = () => ({
  component: HeroesComponent,
  props: {
    add: action('Add button clicked'),
  },
});

export const DeleteHero = () => ({
  component: HeroesComponent,
  props: {
    delete: action('Delete button clicked'),
  },
});
