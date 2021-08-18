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
        const isError = Boolean(errorMessage);
        return (
            <MaterialTextField
                error={isError}
                helperText={isError && errorMessage}
                inputRef={inputRef}
                {...rest}
            />
        );
    }
);
