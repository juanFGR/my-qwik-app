import type { Meta, StoryObj } from "storybook-framework-qwik";
import type { CounterProps } from "../components/custom/counter/counter";
import Counter from "../components/custom/counter/counter";
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: "Counters",
  argTypes: {
    initialStep: {
      control: {
        type: 'number'
      },
      description: 'initial value'
    }
  },
  args: {
    initialStep: 20
  },
  component: Counter,
} satisfies Meta<CounterProps>;

export default meta;

type Story = StoryObj<CounterProps>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    initialStep: 20
  },
};



/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component

    await userEvent.click(canvas.getByTestId('decrease'))
    
    await new Promise(r => setTimeout(r, 1000));
    await userEvent.click(canvas.getByTestId('decrease'))
    
    await new Promise(r => setTimeout(r, 1000));
    await userEvent.click(canvas.getByTestId('increase'))
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
   // await userEvent.click(canvas.getByRole('button'));

    await new Promise(r => setTimeout(r, 1000));
   // 👇 Assert DOM structure
    await expect(parseInt(canvas.getByTestId('counter-value').innerText)).toEqual(19);
  },
};
