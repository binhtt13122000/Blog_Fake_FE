import React from "react";

import BoxBase from "../../Box/BoxBase/index";
import ButtonBase from "../../Button/ButtonBase/index";
import CustomizedSnackbars from "../SnackBarBase/index";
import { SnackBarBaseProps } from "../SnackBarBase/index";
import useSnackBar from "./hooks/index";

import { Story } from "@storybook/react";

const SnackBarHooks = (props: SnackBarBaseProps) => {
    const { message: msg, autoHideDuration, ...rest } = props;
    const { isActive, timeHide, message, openSnackBar, handleClose } = useSnackBar();

    const _showSnackbarHandler = (msg = "This is text", timeHide: number | undefined) => {
        openSnackBar(msg, timeHide);
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
                    onClick={_showSnackbarHandler.bind(this, msg, autoHideDuration)}
                    variant="contained"
                >
                    Click To Open SnackBar
                </ButtonBase>
                <ButtonBase
                    onClick={_showSnackbarHandler.bind(this, "Another SnackBar", autoHideDuration)}
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
                {...rest}
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
    autoHideDuration: 8000,
    variant: "filled",
    elevation: 8,
    severity: "warning",
    disableWindowBlurListener: true,
};

export const Error = Template.bind({});

Error.args = {
    message: "SnackBar with text error",
    autoHideDuration: 2000,
    anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
    },
    variant: "filled",
    elevation: 8,
    severity: "error",
    disableWindowBlurListener: true,
};
