import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import {
    TextField as MaterialTextField,
    BaseTextFieldProps as MaterialTextFieldProps,
    Button,
} from "@material-ui/core";

export interface TextFieldBaseProps extends MaterialTextFieldProps {
    errorMessage: string;
    inputRef: React.Ref<any>;
}
export const TextFieldRhf = React.forwardRef<HTMLInputElement, TextFieldBaseProps>(
    (props: TextFieldBaseProps) => {
        const { errorMessage, inputRef, ...rest } = props;
        return (
            <MaterialTextField
                error={Boolean(errorMessage)}
                helperText={Boolean(errorMessage) && errorMessage}
                inputRef={inputRef}
                {...rest}
            />
        );
    }
);

type FormInputs = {
    username: string;
};

const FormWithTextFieldRhf: React.FC = (props) => {
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
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default FormWithTextFieldRhf;
