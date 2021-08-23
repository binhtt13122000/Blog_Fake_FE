import LinearProgressBase, { LinearProgressProps } from ".";

import { Story } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/Loading/LinearProgress/Linear",
    component: LinearProgressBase,
    argTypes: {
        color: {
            options: ["primary", "secondary"],
            control: { type: "select" },
        },
        variant: {
            options: ["indeterminate", "determinate", "buffer"],
            control: { type: "select" },
        },
    },
};

//👇 We create a “template” of how args map to rendering
const Template: Story<LinearProgressProps> = (args) => <LinearProgressBase {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: "primary",
    variant: "indeterminate",
    value: 0,
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    variant: "indeterminate",
    value: 0,
};
