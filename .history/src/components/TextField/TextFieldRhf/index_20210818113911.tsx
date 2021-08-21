import React from "react";

import {
    TextField as MaterialTextField,
    BaseTextFieldProps as MaterialTextFieldProps,
} from "@material-ui/core";

export interface TextFieldBaseProps extends MaterialTextFieldProps {
    errorMessage: string;
    inputRef: React.Ref<HTMLInputElement>;
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
