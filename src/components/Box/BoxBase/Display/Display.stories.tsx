import React from "react";

import BoxBase from "..";

export const Display: React.FC = (props) => {
    return (
        <BoxBase
            minHeight="fit-content"
            border={{ length: 4, style: "solid" }}
            padding={{
                value: 1,
            }}
            overflow="hidden"
            {...props}
        >
            <BoxBase
                bgcolor="primary"
                p={2}
                px={3}
                width="fit-content"
                overflow="hidden"
                borderRadius={{ length: 24, unit: "px" }}
                borderTopLeftRadius={{ length: 10, unit: "px" }}
                borderTopRightRadius={{ length: 50, unit: "%" }}
                borderBottomRightRadius={{ length: 50, unit: "%" }}
            >
                BoxBase1
            </BoxBase>
            <BoxBase
                bgcolor="secondary"
                p={2}
                px={3}
                width="fit-content"
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
                overflow="hidden"
                borderRadius={{ length: 24, unit: "px" }}
            >
                BoxBase3
            </BoxBase>
        </BoxBase>
    );
};
//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/BoxBase/Display/Display",
    component: Display,
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
