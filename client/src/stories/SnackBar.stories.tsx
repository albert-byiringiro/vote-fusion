import { Meta, StoryObj } from "@storybook/react/*";
import SnackBar from "../components/ui/SnackBar";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof SnackBar>

export default {
    title: 'SnackBar',
    component: SnackBar,
    argTypes: {
        onClose: { action: 'close-a-roo' },
    },
    args: {
        show: true,
        type: 'standard',
    }
} as Meta<typeof SnackBar>

type Story = StoryObj<StoryProps>

export const Standard: Story = {
    render: (args) => (
        <SnackBar {...args}/>
    ),
    args: {
        message: 'Something happened',
        title: 'Heyo'
    },
}

export const Error: Story = {
    render: (args) => (
        <SnackBar {...args}/>
    ),
    args: {
        message: "Ooops! There is a problem!",
        title: 'Error Alert!',
        type: 'error',
    }
}

export const AutoClose: Story = {
    render: (args) => (
        <SnackBar {...args} />
    ),
    args: {
        message: 'Something happened',
        title: 'Heyo',
        autoCloseDuration: 2000
    }
}