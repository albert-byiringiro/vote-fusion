import { Meta, StoryObj } from "@storybook/react/*";
import ParticipantList from "../components/ParticipantList";
import { ComponentProps } from "react";
import { Participants } from "../../../shared/poll-types";

type StoryProps = ComponentProps<typeof ParticipantList>

export default {
    title: 'ParticipantList',
    component: ParticipantList,
    argTypes: {
        onClose: { action: 'closing' },
        onRemoveParticipant: { action: 'removing participant' },
    },
    args: {
        isOpen: true,
        isAdmin: false,
    }
} as Meta<typeof ParticipantList>

const participants: Participants = {
    '1': 'Jeannie',
    '2': 'Ryan',
    '3': 'Ayalen',
    '4': 'Giuseppe',
    '5': 'Sara',
};

type Story = StoryObj<StoryProps>

export const Default: Story = {
    render: (args) => (
        <div className="max-w-sm m-auto h-screen relative">
            <ParticipantList {...args}/>
        </div>
    ),
    args: {
        participants,
        userID: '1',
    }
}