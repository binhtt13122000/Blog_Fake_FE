import React from "react";

import BoxBase from "../../Box/BoxBase/index";
import ButtonBase from "../../Button/ButtonBase/index";
import CustomizedSnackbars from "../SnackBarBase/index";
import { SnackBarBaseProps } from "../SnackBarBase/index";
import useSnackBar from "./hooks/index";

import { Story } from "@storybook/react";

const SnackBarHooks = (props: SnackBarBaseProps) => {
    const { isActive, timeHide, message, openSnackBar, handleClose } = useSnackBar();

    const _showSnackbarHandler = (msg = "This is text") => {
        openSnackBar(msg);
    };

    return (
        <React.Fragment>
            <BoxBase
                width={1}
                height={100}
                bgcolor="secondary"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <ButtonBase
                    onClick={_showSnackbarHandler.bind(this, props.message)}
                    variant="contained"
                >
                    Click To Open SnackBar
                </ButtonBase>
                <ButtonBase
                    onClick={_showSnackbarHandler.bind(this, "Another SnackBar")}
                    variant="contained"
                >
                    Click To Open Another SnackBar
                </ButtonBase>
            </BoxBase>
            <CustomizedSnackbars
                message={message}
                open={isActive}
                handleClose={handleClose}
                autoHideDuration={timeHide}
                {...props}
            />
        </React.Fragment>
    );
};

export default {
    title: "Components/SnackBar/SnackBarHooks",
    component: SnackBarHooks,
};

const Template: Story<SnackBarBaseProps> = (args) => <SnackBarHooks {...args} />;

export const Info = Template.bind({});

Info.args = {
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
    message: "SnackBar with text error",
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
