import { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "../components/ui/BottomSheet";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof BottomSheet>

export default {
  title: 'BottomSheet',
  component: BottomSheet,
  argTypes: {
    onClose: {
      action: 'closing'
    }
  },
  args: {
    isOpen: true
  }
} as Meta<typeof BottomSheet>

type Story = StoryObj<StoryProps>

export const OpenBottomSheetShort: Story = {
  render: (args) => (
    <div className="max-w-sm m-auto h-screen relative">
      <BottomSheet {...args} />
    </div>
  ),
  args: {
    children: (
      <div className="p-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, facere
        quia enim ut, ad molestiae natus illum rem harum suscipit consectetur
        voluptatem incidunt. Id adipisci eius architecto vitae, rem quia cum velit
        totam deleniti repudiandae asperiores, et delectus tempore necessitatibus
        beatae aspernatur quasi sapiente, labore reiciendis nemo? Hic, eveniet
        officiis!
      </div>
    )
  }
}

export const OpenBottomSheetLong: Story = {
  render: (args) => (
    <div className="max-w-sm m-auto h-screen relative">
      <BottomSheet {...args} />
    </div>
  ),
  args: {
    children: (
      <div className="p-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste soluta
        voluptates, unde, at assumenda fugit fuga molestias earum architecto non,
        nostrum placeat harum accusantium nisi odit amet vel natus est dolores
        quidem commodi? Praesentium, expedita ratione! Cumque non quod odit
        laudantium tempora laborum nesciunt iure vel, consequatur voluptate ipsam
        vero? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sunt
        ab maiores perspiciatis eligendi sapiente veniam officiis maxime autem
        distinctio illo et ut amet earum sit odit error ullam adipisci minima
        repudiandae, eveniet aliquid dolore necessitatibus! Impedit ea omnis
        suscipit, magni et pariatur maxime porro, distinctio, ipsam mollitia
        dolorum officia!
      </div>
    )
  }
}