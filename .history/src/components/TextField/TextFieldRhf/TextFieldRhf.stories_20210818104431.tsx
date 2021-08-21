import { SubmitHandler, useForm } from "react-hook-form";

import ButtonBase from "src/components/Button/ButtonBase";

import { TextFieldBaseProps, TextFieldRhf } from ".";

import { Story } from "@storybook/react";

type FormInputs = {
    username: string;
};

export const FormWithTextFieldRhf: React.FC = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
    };
    const { ref: inputRef, ...inputProps } = register("username", {
        required: "Username không được để trống",
        validate: (value) => value.length > 5 || "Độ dài username cần lớn hơn 5",
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextFieldRhf
                inputRef={inputRef}
                {...inputProps}
                errorMessage={errors["username"] != null && errors["username"].message}
                {...props}
            />
            <br />
            <ButtonBase type="submit" variant="contained" color="primary">
                Submit
            </ButtonBase>
        </form>
    );
};

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
