import React from "react";

import {
    Snackbar as MaterialSnackBar,
    SnackbarProps as MaterialSnackBarProps,
} from "@material-ui/core";
import { SnackbarCloseReason } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
    return <MuiAlert {...props} />;
}

export interface SnackBarBaseProps extends MaterialSnackBarProps {
    elevation?: number;
    variant?: "filled" | "outlined" | "standard";
    severity?: "success" | "warning" | "info" | "error";
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
            <Alert
                onClose={handleClose}
                severity={severity}
                variant={variant}
                elevation={elevation}
            >
                {message}
            </Alert>
        </MaterialSnackBar>
    );
}
