import { Meta, StoryObj } from "@storybook/react/*";
import ConfirmationDialog from "../components/ui/ConfirmationDialog";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof ConfirmationDialog>
export default {
    title: 'ConfirmationDialog',
    component: ConfirmationDialog,
    argTypes: {
        onCancel: {
            action: 'cancelling'
        },
        onConfirm: {
            action: 'confirming'
        },
    },
    args: {
        showDialog: true
    }
} as Meta<typeof ConfirmationDialog>

type Story = StoryObj<StoryProps>

export const BasicMessage: Story = {
    args: {
        message: 'The world will move on if you continue ...',
    },
    render: (args) => {
        return <ConfirmationDialog {...args}/>
    }
}