import LinearProgressBase, { LinearProgressProps } from ".";

import { Story } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/Loading/LinearProgress/Linear",
    component: LinearProgressBase,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<LinearProgressProps> = (args) => <LinearProgressBase {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: "primary",
    variant: "indeterminate",
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    variant: "indeterminate",
};
