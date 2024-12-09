import { Meta, StoryObj } from "@storybook/react/*";
import RankedCheckBox from "../components/ui/RankedCheckBox";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof RankedCheckBox>

export default {
    title: 'RankedCheckBox',
    component: RankedCheckBox,
    argTypes: {
        onSelect: { action: 'selected' }
    }
} as Meta<typeof RankedCheckBox>

type Story = StoryObj<StoryProps>

export const Ranked: Story = {
    args: {
        rank: 1,
        value: "Tim's tacos"
    },
    render: (args) => (
        <div className="h-screen max-w-sm m-auto">
            <RankedCheckBox {...args}/>
        </div>
    )
}

export const Unranked: Story = {
    args: {
        value: "Tim's tacos"
    },
    render: (args) => (
        <div className="h-screen max-w-sm m-auto">
            <RankedCheckBox {...args}/>
        </div>
    )
}