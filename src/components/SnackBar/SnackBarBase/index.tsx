import React from "react";

import {
    Snackbar as MaterialSnackBar,
    SnackbarProps as MaterialSnackBarProps,
} from "@material-ui/core";
import { SnackbarCloseReason } from "@material-ui/core";

import AlertBase from "../../Alert/AlertBase/index";

export interface SnackBarBaseProps extends MaterialSnackBarProps {
    elevation?: number;
    variant?: "filled" | "outlined" | "standard";
    severity?: "success" | "warning" | "info" | "error";
    message?: string;
    autoHideDuration?: number;
    handleClose?: (
        event: React.SyntheticEvent<Element, Event>,
        reason?: SnackbarCloseReason
    ) => void;
}

export default function CustomizedSnackbars(props: SnackBarBaseProps) {
    const {
        severity = "info",
        elevation = 6,
        variant = "standard",
        message,
        handleClose,
        ...rest
    } = props;
    return (
        <MaterialSnackBar autoHideDuration={6000} onClose={handleClose} {...rest}>
            <AlertBase
                onClose={handleClose}
                severity={severity}
                variant={variant}
                elevation={elevation}
                message={message}
            />
        </MaterialSnackBar>
    );
}
