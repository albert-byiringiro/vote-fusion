import { Meta, StoryObj } from "@storybook/react/*";
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

export const Default: Story = {
    render: (args) => {
        return <BottomSheet {...args} />
    }
}

export const OpenBottomSheetShort: Story = {
    args: {
        children: (
            <div className="p-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo expedita laudantium. Aspernatur reprehenderit maiores exercitationem tempora magnam, quisquam, ut obcaecati corporis odio rerum temporibus hic? Laudantium sed corrupti id?
            </div>
        )
    }
}

export const OpenBottomSheetLong: Story = {
    args: {
        children: (
            <div className="p-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi, laudantium a tempora mollitia reprehenderit corrupti, iusto quasi asperiores eveniet suscipit, architecto quis nisi exercitationem culpa ullam possimus rerum? Beatae, molestiae possimus quo magnam amet dignissimos officia velit ratione animi ullam recusandae necessitatibus, eveniet doloribus blanditiis a expedita. Nisi recusandae ad eum odit veritatis, odio quae quia autem quaerat rerum culpa voluptate incidunt accusamus sequi, ipsum ipsa praesentium quos esse earum. Inventore adipisci libero, enim aperiam ex, tenetur debitis ducimus itaque laboriosam mollitia architecto corrupti praesentium veniam modi distinctio obcaecati animi eius a sunt voluptas. Eos, optio? Minima, quas itaque! Eligendi aspernatur exercitationem aut ducimus suscipit ipsum sit, dolor enim. Culpa fuga incidunt nobis dolorem temporibus ad corporis ea? Quasi?
            </div>
        )
    }
}