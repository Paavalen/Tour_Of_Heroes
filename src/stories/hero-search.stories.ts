import {Meta, StoryObj } from '@storybook/angular';
import { HeroSearchComponent } from '../app/hero-search/hero-search.component';

const meta: Meta<HeroSearchComponent> = {
  title: 'Hero Search',
  component: HeroSearchComponent,
 
};

export default meta;
type Story = StoryObj<HeroSearchComponent>;


export const searchTerms: Story = {
  args: {

  },
}

