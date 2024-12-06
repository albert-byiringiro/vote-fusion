import { Meta, StoryObj } from "@storybook/react/*";
import HorizontalSwipeList from "../components/ui/HorizontalSwipeList";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof HorizontalSwipeList>

export default {
    title: 'HorizontalSwipeList',
    component: HorizontalSwipeList,
} as Meta<typeof HorizontalSwipeList>

type Story = StoryObj<StoryProps>

export const SwipeList: Story = {
    render: (args) => (
        <div className="h-screen max-w-sm m-auto">
        <HorizontalSwipeList {...args}>{args.children}</HorizontalSwipeList>
      </div>
    ),
    args: {
        children: [
            <div key="key1" className="bg-gray-400 h-48 w-full"></div>,
            <div key="key2" className="bg-blue-400 h-48 w-full"></div>,
            <div key="key3" className="bg-green-400 h-48 w-full"></div>,
            <div key="key4" className="bg-red-400 h-48 w-full"></div>,
        ]
    },
}

export const SwipeListTallContent: Story = {
    render: (args) => (
        <div className="h-screen max-w-sm m-auto">
        <HorizontalSwipeList {...args}>{args.children}</HorizontalSwipeList>
      </div>
    ),
    args: {
        children: [
            <div key="key1" className="bg-gray-400 h-96 w-full"></div>,
            <div key="key2" className="bg-blue-400 h-96 w-full"></div>,
            <div key="key3" className="bg-green-400 h-96 w-full"></div>,
            <div key="key4" className="bg-red-400 h-96 w-full"></div>,
        ]
    },
}