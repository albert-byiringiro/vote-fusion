import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CountSelector from '../components/ui/CountSelector';

type StoryProps = React.ComponentProps<typeof CountSelector>;

const meta = {
  title: 'Components/CountSelector',
  component: CountSelector,
  argTypes: {
    onChange: { 
      action: 'count changed',
    },
  },
  args: {
    onChange: fn(),
    min: 0,
    max: 5,
    step: 1,
    initial: 3,
  },
} as Meta<typeof CountSelector>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const StepOfTwo: Story = {
  args: {
    step: 2,
  }
};

export const WideRange: Story = {
  args: {
    min: -10,
    max: 10,
    initial: 0,
  },
};

export const SmallRange: Story = {
  args: {
    min: 0,
    max: 3,
    initial: 1,
  },
};