import FormWithTextFieldRhf, { TextFieldBaseProps } from ".";

import { Story } from "@storybook/react";

export default {
    title: "Components/TextFieldRHF",
    component: FormWithTextFieldRhf,
    argTypes: {
        variant: {
            options: ["standard", "filled", "outlined"],
            control: { type: "radio" },
        },
    },
};

const Template: Story<TextFieldBaseProps> = (args) => <FormWithTextFieldRhf {...args} />;

export const Standard = Template.bind({});

Standard.args = {
    label: "Input new text",
    variant: "standard",
    disabled: false,
    required: true,
};

export const Filled = Template.bind({});

Filled.args = {
    label: "Input new text",
    variant: "filled",
    disabled: false,
    required: true,
};

export const Outlined = Template.bind({});

Outlined.args = {
    label: "Input new text",
    variant: "outlined",
    disabled: false,
    required: true,
};
