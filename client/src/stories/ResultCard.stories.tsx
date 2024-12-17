import type { Meta, StoryObj } from '@storybook/react';
import ResultCard from '../components/ui/ResultCard';
import { Results } from 'shared/poll-types';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof ResultCard>

const meta = {
  title: 'ResultCard',
  component: ResultCard,
  decorators: [
    (Story) => (
      <div className="max-w-sm m-auto h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResultCard>;

export default meta;

type Story = StoryObj<StoryProps>;

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
    {
      nominationID: '5',
      score: 1.41,
      nominationText: 'El Vilsito',
    },
    {
      nominationID: '6',
      score: 1.11,
      nominationText: 'Tacos El Güero',
    },
    {
      nominationID: '7',
      score: 0.0,
      nominationText: 'Taqueria del Mercado',
    },
  ];

export const ResultCardLong: Story = {
  args: {
    results,
  },
};