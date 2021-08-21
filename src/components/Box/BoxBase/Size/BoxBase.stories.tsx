import React from "react";

import BoxBase from "../";

export const Size: React.FC = (props) => {
    return (
        <React.Fragment>
            <BoxBase width={1} bgcolor="info" padding={{ value: 1 }}>
                <ol>
                    <li>
                        <h3>Width Property:</h3>
                        <ol>
                            <li>
                                With value (0 - 1) exchange to (%). Example:
                                <ul>
                                    <li>0 = 0%</li>
                                    <li>1/4 = 25%</li>
                                    <li>1/2 = 50%</li>
                                    <li>1 = 100%</li>
                                </ul>
                            </li>
                            <li>Another value will auto exchange to (px) </li>
                        </ol>
                    </li>
                    <li>
                        <h3>Height Property: </h3>Calculate same Width property.
                    </li>
                </ol>
            </BoxBase>
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
        </React.Fragment>
    );
};
//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/BoxBase/Size/Size",
    component: Size,
    argTypes: {
        bgcolor: {
            options: ["primary", "secondary", "info", "error", "warning", "success"],
            control: { type: "select" },
        },
        typeColor: {
            options: ["main", "light", "dark"],
            control: { type: "select" },
        },
        boxSizing: {
            options: ["content-box", "border-box", "initial", "inherit"],
            control: { type: "select" },
        },
        width: { control: { type: "range", min: 0, max: 1000, step: 0.1 } },
        height: { control: { type: "range", min: 0, max: 1000, step: 0.1 } },
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
