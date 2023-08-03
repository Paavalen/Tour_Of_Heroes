
import {Meta, StoryObj } from '@storybook/angular';
import { HeroButtonComponent } from '../app/hero-button/hero-button.component';

const meta: Meta<HeroButtonComponent> = {
  title: 'HeroButton',
  component: HeroButtonComponent,

};

export default meta;
type Story = StoryObj<HeroButtonComponent>;


export const caption: Story = {
  args: {
    caption: 'primary',
  },
}


