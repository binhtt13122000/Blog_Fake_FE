import * as React from "react";

import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@material-ui/core";

export interface ButtonBaseProps extends MaterialButtonProps {}

const ButtonBase = (props: ButtonBaseProps) => {
    return <MaterialButton {...props} />;
};

export default ButtonBase;
