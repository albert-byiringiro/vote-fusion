import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CountSelector from '../components/ui/CountSelector';

const meta: Meta<typeof CountSelector> = {
  title: 'CountSelector',
  component: CountSelector,
  argTypes: {
    onChange: { action: 'count changed' },
  },
  args: {
    initial: 3,
    min: 0,
    max: 5,
    step: 1,
  },
};

export default meta;

export const Default: StoryFn<typeof CountSelector> = (args) => (
  <div className="h-screen max-w-sm m-auto">
    <CountSelector {...args} />
  </div>
);

export const Inc2: StoryFn<typeof CountSelector> = (args) => (
  <div className="h-screen max-w-sm m-auto">
    <CountSelector {...{ ...args, step: 2 }} />
  </div>
);