import {
    TextField as MaterialTextField,
    BaseTextFieldProps as MaterialTextFieldProps,
} from "@material-ui/core";

export interface TextFieldBaseProps extends MaterialTextFieldProps {}

const TextFieldBase = (props: TextFieldBaseProps) => {
    return <MaterialTextField {...props} />;
};

export default TextFieldBase;
