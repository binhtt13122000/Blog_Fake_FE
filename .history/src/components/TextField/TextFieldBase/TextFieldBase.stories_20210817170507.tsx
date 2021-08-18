import TextFieldBase, { TextFieldBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/TextFieldBase",
    component: TextFieldBase,
};

const Template: Story<TextFieldBaseProps> = (args) => <TextFieldBase {...args} />;

export const Standard = Template.bind({});

Standard.args = {
    label: "Input new text",
    variant: "standard",
    error: false,
    disabled: false,
    focused: false,
};

export const Filled = Template.bind({});

Filled.args = {
    label: "Input new text",
    variant: "filled",
    error: false,
    disabled: false,
    required: true,
    focused: false,
};

export const Outlined = Template.bind({});

Outlined.args = {
    label: "Input new text",
    variant: "outlined",
    error: false,
    disabled: false,
    required: true,
    focused: false,
};
