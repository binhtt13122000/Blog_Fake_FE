import React from "react";

import BoxBase from "../";

export const BackgroundColor: React.FC = (props) => {
    return (
        <BoxBase
            minHeight={80}
            border={{ length: 4, style: "solid" }}
            padding={{
                value: 1,
            }}
            flexBasis={{ value: 100 }}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexGrow={10}
            {...props}
        >
            <BoxBase
                bgcolor="primary"
                p={2}
                px={3}
                width="fit-content"
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
                BoxBase2
            </BoxBase>
        </BoxBase>
    );
};
//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/BoxBase/Color/BgColor",
    component: BackgroundColor,
    argTypes: {
        bgcolor: {
            options: ["primary", "secondary", "info", "error", "warning", "success"],
            control: { type: "select" },
        },
        typeColor: {
            options: ["main", "light", "dark"],
            control: { type: "select" },
        },
    },
};
