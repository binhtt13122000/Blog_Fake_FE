import CircularProgressBase, { CircularProgressProps } from ".";

import { Story } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/Loading/CircularProgress/Circular",
    component: CircularProgressBase,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<CircularProgressProps> = (args) => <CircularProgressBase {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: "primary",
    variant: "indeterminate",
    size: 42,
    disableShrink: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    variant: "indeterminate",
    size: 42,
    disableShrink: true,
};

export const Inherit = Template.bind({});
Inherit.args = {
    color: "inherit",
    variant: "indeterminate",
    size: 42,
    disableShrink: true,
};
