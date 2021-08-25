import React from "react";

import { SnackBarProvider, useSnackBar } from "../../../contexts/SnackBarContext/index";
import BoxBase from "../../Box/BoxBase/index";
import ButtonBase from "../../Button/ButtonBase/index";
import { SnackBarBaseProps } from "../SnackBarBase/index";

import { Meta, Story } from "@storybook/react";

const SnackBarHooks = (props: SnackBarBaseProps) => {
    const { showSnackBar } = useSnackBar();
    return (
        <BoxBase
            width={1}
            height={100}
            bgcolor="secondary"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <ButtonBase onClick={() => showSnackBar({ ...props })} variant="contained">
                Click To Open SnackBar
            </ButtonBase>
        </BoxBase>
    );
};

export default {
    title: "Components/SnackBar/SnackBarHooks",
    component: SnackBarHooks,
    decorators: [
        (Story) => {
            return (
                <SnackBarProvider>
                    <Story />
                </SnackBarProvider>
            );
        },
    ],
} as Meta;

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
