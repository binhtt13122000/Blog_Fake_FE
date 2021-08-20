import React from "react";

import BoxBase from ".";

export const BoxImplement: React.FC = (props) => {
    return (
        <BoxBase
            minHeight={{ length: 80, unit: "px" }}
            border={{ length: 50, unit: "px", style: "solid" }}
            margin={{
                marginTop: 10,
                marginRight: 10,
                marginBottom: 10,
                marginLeft: 10,
                unit: "px",
            }}
            padding={{
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 40,
                paddingLeft: 10,
                unit: "px",
            }}
            {...props}
        >
            <h1>Check Test</h1>
            <BoxBase
                bgcolor="primary"
                p={2}
                width={{ length: 100, unit: "%" }}
                height={{ length: 100, unit: "%" }}
                overflow="hidden"
            >
                BoxBase1
            </BoxBase>
            <BoxBase
                bgcolor="secondary"
                p={2}
                width={{ length: 100, unit: "%" }}
                height={{ length: 100, unit: "%" }}
                overflow="hidden"
            >
                BoxBase2
            </BoxBase>
            <BoxBase
                bgcolor="error"
                p={2}
                width={{ length: 100, unit: "%" }}
                height={{ length: 100, unit: "%" }}
                overflow="hidden"
            >
                BoxBase2
            </BoxBase>
        </BoxBase>
    );
};
//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/BoxBase",
    component: BoxImplement,
    argTypes: {
        display: {
            options: ["flex", "block"],
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
        bgcolor: {
            options: ["primary", "secondary", "info", "error", "warning", "success"],
            control: { type: "select" },
        },
        typeColor: {
            options: ["main", "light", "dark"],
            control: { type: "select" },
        },
        width: { control: { type: "range", min: 0, max: 1000, step: 1 } },
        height: { control: { type: "range", min: 0, max: 1000, step: 1 } },
    },
};
