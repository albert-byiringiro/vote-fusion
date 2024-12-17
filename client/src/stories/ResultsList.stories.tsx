import type { Meta, StoryObj } from '@storybook/react';
import { Results } from 'shared/poll-types';
import ResultsList from '../components/ui/ResultsList';
import { ComponentProps } from 'react';

const results: Results = [
  {
    nominationID: '1',
    score: 5.0,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 2.56,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 2.4,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 1.55,
    nominationText: 'Los Taqueros Locos con Nombre Largo',
  },
];

const resultsLong: Results = [
  {
    nominationID: '1',
    score: 5.0,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 4.2,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 3.8,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 3.5,
    nominationText: 'Los Taqueros Locos con Nombre Largo',
  },
  {
    nominationID: '5',
    score: 3.2,
    nominationText: 'Chicky-Chicken-Filet',
  },
  {
    nominationID: '6',
    score: 2.8,
    nominationText: 'Mad Clown Burger',
  },
  {
    nominationID: '7',
    score: 2.5,
    nominationText: 'Thai Basil #0005',
  },
  {
    nominationID: '8',
    score: 2.0,
    nominationText: 'Sichuan Spice',
  },
  {
    nominationID: '9',
    score: 1.5,
    nominationText: 'Not Good Curry',
  },
  {
    nominationID: '10',
    score: 1.0,
    nominationText: 'Not Good Soul Food',
  },
  {
    nominationID: '11',
    score: 0.8,
    nominationText: 'Not Good Sushi',
  },
  {
    nominationID: '12',
    score: 0.5,
    nominationText: 'Not Good Falafel',
  },
  {
    nominationID: '13',
    score: 0.2,
    nominationText: 'Not Good Steakhouse',
  },
  {
    nominationID: '14',
    score: 0.0,
    nominationText: 'Not Good Burgers',
  },
];

type StoryProps = ComponentProps<typeof ResultsList>

const meta = {
  title: 'ResultsList',
  component: ResultsList,
  decorators: [
    (Story) => (
      <div className="max-w-sm m-auto h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResultsList>;

export default meta;

type Story = StoryObj<StoryProps>;

export const ResultsBasic: Story = {
  args: {
    results: [results],
  },
};

export const ResultsLong: Story = {
  args: {
    results: [resultsLong],
  },
};