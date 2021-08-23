import AlertBase, { AlertBaseProps } from ".";

import { Story } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/AlertBase",
    component: AlertBase,
    argTypes: {
        color: {
            options: ["info", "success", "warning", "error"],
            control: { type: "select" },
        },
        severity: {
            options: ["info", "success", "warning", "error"],
            control: { type: "select" },
        },
        variant: {
            options: ["filled", "outlined", "standard"],
            control: { type: "select" },
        },
    },
};

//👇 We create a “template” of how args map to rendering
const Template: Story<AlertBaseProps> = (args) => <AlertBase {...args} />;

export const Filled = Template.bind({});

Filled.args = {
    color: "success",
    severity: "success",
    variant: "filled",
    message: "This is alert with filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
    color: "info",
    severity: "info",
    variant: "outlined",
    message: "This is alert with outlined",
};

export const Standard = Template.bind({});
Standard.args = {
    color: "warning",
    severity: "warning",
    variant: "standard",
    message: "This is alert with standard",
};
