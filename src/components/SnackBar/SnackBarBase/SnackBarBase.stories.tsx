import React, { useState } from "react";

import { SnackbarCloseReason } from "@material-ui/core";

import SnackBarBase, { SnackBarBaseProps } from ".";
import ButtonBase from "../../Button/ButtonBase/index";

import { Story } from "@storybook/react";

export const DefaultSnackBar = (props: SnackBarBaseProps) => {
    const { message = "This is the text", ...rest } = props;
    const [open, setOpen] = useState(false);
    console.log(open);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (
        event: React.SyntheticEvent<Element, Event>,
        reason?: SnackbarCloseReason
    ) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <React.Fragment>
            <ButtonBase onClick={handleClick} variant="contained" color="primary">
                Button
            </ButtonBase>
            <SnackBarBase open={open} handleClose={handleClose} message={message} {...rest} />
        </React.Fragment>
    );
};

//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/SnackBarBase",
    component: DefaultSnackBar,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<SnackBarBaseProps> = (args) => <DefaultSnackBar {...args} />;

export const Info = Template.bind({});

Info.args = {
    message: "SnackBar with text info",
    autoHideDuration: 5000,
    anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
    },
    variant: "filled",
    elevation: 8,
    severity: "info",
    disableWindowBlurListener: true,
};

export const Success = Template.bind({});

Success.args = {
    message: "SnackBar with text info",
    autoHideDuration: 5000,
    anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
    },
    variant: "filled",
    elevation: 8,
    severity: "success",
    disableWindowBlurListener: true,
};

export const Warning = Template.bind({});

Warning.args = {
    message: "SnackBar with text info",
    autoHideDuration: 5000,
    anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
    },
    variant: "filled",
    elevation: 8,
    severity: "warning",
    disableWindowBlurListener: true,
};

export const Error = Template.bind({});

Error.args = {
    message: "SnackBar with text info",
    autoHideDuration: 5000,
    anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
    },
    variant: "filled",
    elevation: 8,
    severity: "error",
    disableWindowBlurListener: true,
};
