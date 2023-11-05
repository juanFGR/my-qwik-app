import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { BannerProps } from "../components/custom/banner/banner";
import Banner from "../components/custom/banner/banner";
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: "Banner",
  argTypes: {
    title: {
      control: {
        type: 'text'
      },
      description: 'Title Banner'
    },
    description: {
      control: {
        type: 'text'
      },
      description: 'Title Banner'
    },
    ctaTitle: {
      control: {
        type: 'text'
      },
      description: 'Title Banner'
    }
  },
  component: Banner,
} satisfies Meta<BannerProps>;

export default meta;

type Story = StoryObj<BannerProps>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Title Banner',
    description: 'Description Banner',
    ctaTitle: 'let\'s try!' 
  },
};



/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const InteractionTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);


    
     await new Promise(r => setTimeout(r, 1000));
   // 👇 Assert DOM structure
    await expect(canvas.getByTestId('banner-title').innerText).toEqual('title Mock');
  },
};
