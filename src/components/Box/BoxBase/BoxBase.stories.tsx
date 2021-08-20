import React from "react";

import BoxBase from ".";

export const BoxImplement: React.FC = (props) => {
    return (
        <BoxBase {...props}>
            <h1>Check Test</h1>
            <BoxBase bgcolor="primary" p={2} width={100} overflow="hidden">
                BoxBase1
            </BoxBase>
            <BoxBase bgcolor="secondary" p={2} width={100} overflow="hidden">
                BoxBase2
            </BoxBase>
            <BoxBase bgcolor="error" p={2} width={100} overflow="hidden">
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
