import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Hero } from '../app/hero';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
import { HeroService } from '../app/hero.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

export default {
  title: 'HeroDetailComponent',
  component: HeroDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeroDetailComponent],
      imports: [],
      providers: [
        HeroService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 1 }),
            },
          },
        },
      ],
    }),
  ],
} as Meta<HeroDetailComponent>;

type Story = StoryObj<HeroDetailComponent>;

const heroTemplate: Hero = {
  id: 1,
  name: 'joe',
  ability: 'a',
};


export const EditHeroDetails: Story = {
  args: {
    hero: {
      id: 1,
      name: 'joe',
      ability: 'a',
    },
    save: () => {},
  },
};

