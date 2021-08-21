import React from "react";

import BoxBase, { BoxBaseProps } from "../..";

import { Story } from "@storybook/react";

export const DefaultBox: React.FC = (props) => {
    return (
        <BoxBase
            minHeight={80}
            border={{ length: 6, style: "solid" }}
            padding={{
                value: 1,
            }}
            {...props}
        >
            <BoxBase
                bgcolor="primary"
                p={2}
                px={3}
                width="fit-content"
                height={1}
                overflow="hidden"
                borderRadius={{ length: 24, unit: "px" }}
            >
                BoxBase1
            </BoxBase>
            <BoxBase
                bgcolor="secondary"
                p={2}
                px={3}
                width="fit-content"
                height={1}
                overflow="hidden"
                borderRadius={{ length: 24, unit: "px" }}
            >
                BoxBase2
            </BoxBase>
            <BoxBase
                bgcolor="error"
                p={2}
                px={3}
                width="fit-content"
                height={1}
                overflow="hidden"
                borderRadius={{ length: 24, unit: "px" }}
            >
                BoxBase2
            </BoxBase>
        </BoxBase>
    );
};
//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/BoxBase/Flex/JustifyContent/JustifyContent",
    component: DefaultBox,
    argTypes: {
        display: {
            options: ["flex", "inline-flex", "block", "inline-block", "inline"],
            control: { type: "select" },
        },
        flexDirection: {
            options: ["row", "row-reverse", "column", "column-reverse"],
            control: { type: "select" },
        },
        justifyContent: {
            options: [
                "center",
                "start",
                "end",
                "flex-start",
                "flex-end",
                "left",
                "right",
                "space-between",
                "space-around",
                "space-evenly",
                "stretch",
            ],
            control: { type: "select" },
        },
        alignItems: {
            options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
            control: { type: "select" },
        },
        flexWrap: {
            options: ["nowrap", "wrap", "wrap-reverse", "inherit", "initial", "revert", "unset"],
            control: { type: "select" },
        },
        overflow: {
            options: [
                "visible",
                "hidden",
                "clip",
                "scroll",
                "auto",
                "visible",
                "inherit",
                "initial",
                "revert",
                "unset",
            ],
            control: { type: "select" },
        },
    },
};

//👇 We create a “template” of how args map to rendering
const Template: Story<BoxBaseProps> = (args) => <DefaultBox {...args} />;

export const Center = Template.bind({});
Center.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
};

export const Start = Template.bind({});

Start.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "start",
    alignItems: "center",
};

export const End = Template.bind({});

End.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "end",
    alignItems: "center",
};

export const FlexStart = Template.bind({});
FlexStart.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
};
export const FlexEnd = Template.bind({});
FlexEnd.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
};

export const Left = Template.bind({});
Left.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "left",
    alignItems: "center",
};

export const Right = Template.bind({});
Right.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "right",
    alignItems: "center",
};

export const SpaceBetween = Template.bind({});
SpaceBetween.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
};

export const SpaceAround = Template.bind({});
SpaceAround.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
};

export const SpaceEvenly = Template.bind({});
SpaceEvenly.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
};

export const Stretch = Template.bind({});
Stretch.args = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "stretch",
    alignItems: "center",
};
