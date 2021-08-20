import { Box as MaterialBox, BoxProps as MaterialBoxProps } from "@material-ui/core";

import replyTheme from "../../../theme/replyTheme";

export interface BoxBaseProps extends MaterialBoxProps {
    display?: "flex" | "block";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    justifyContent?:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "left"
        | "right"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch";
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    width?: { length: number; unit: "px" | "%" };
    maxWidth?: { length: number; unit: "px" | "%" };
    minWidth?: { length: number; unit: "px" | "%" };
    height?: { length: number; unit: "px" | "%" };
    maxHeight?: { length: number; unit: "px" | "%" };
    minHeight?: { length: number; unit: "px" | "%" };
    bgcolor?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
    typeColor?: "main" | "light" | "dark";
    boxSizing?: "content-box" | "border-box" | "initial" | "inherit";
    border?: {
        length: number;
        unit: "px";
        style:
            | "solid"
            | "none"
            | "hidden"
            | "dashed"
            | "dotted"
            | "double"
            | "groove"
            | "ridge"
            | "inset"
            | "outset";
    };
    borderRadius?: { length: number; unit: "px" | "%" };
    margin?: {
        marginTop: number;
        marginRight: number;
        marginBottom: number;
        marginLeft: number;
        unit: "px" | "%";
    };
    padding?: {
        paddingTop: number;
        paddingRight: number;
        paddingBottom: number;
        paddingLeft: number;
        unit: "px" | "%";
    };
}

const BoxBase = (props: BoxBaseProps) => {
    const {
        bgcolor = "initial",
        width = "initial",
        maxWidth = "initial",
        minWidth = "initial",
        height = "initial",
        maxHeight = "initial",
        minHeight = "initial",
        boxSizing,
        typeColor = "main",
        border = "initial",
        borderRadius = "initial",
        margin = "initial",
        padding = "initial",
        ...rest
    } = props;
    const widthLength = width === "initial" ? width : width.length + width.unit;
    const minWidthLength = minWidth === "initial" ? minWidth : minWidth.length + minWidth.unit;
    const maxWidthLength = maxWidth === "initial" ? maxWidth : maxWidth.length + maxWidth.unit;
    const heightLength = height === "initial" ? height : height.length + height.unit;
    const minHeightLength = minHeight === "initial" ? minHeight : minHeight.length + minHeight.unit;
    const maxHeightLength = maxHeight === "initial" ? maxHeight : maxHeight.length + maxHeight.unit;

    const borderRads =
        borderRadius === "initial" ? borderRadius : borderRadius.length + borderRadius.unit;

    const borderAttr =
        border === "initial" ? border : `${border.length + border.unit} ${border.style}`;

    const backgroundColor =
        bgcolor === "initial" ? bgcolor : replyTheme.palette[bgcolor][typeColor];
    const color = bgcolor === "initial" ? bgcolor : replyTheme.palette[bgcolor].contrastText;

    const paddingAttr =
        padding === "initial"
            ? padding
            : `${padding.paddingTop + padding.unit} ${padding.paddingRight + padding.unit} ${
                  padding.paddingBottom + padding.unit
              } ${padding.paddingLeft + padding.unit}`;

    const marginAttr =
        margin === "initial"
            ? margin
            : `${margin.marginTop + margin.unit} ${margin.marginRight + margin.unit} ${
                  margin.marginBottom + margin.unit
              } ${margin.marginLeft + margin.unit}`;

    return (
        <MaterialBox
            width={widthLength}
            minWidth={minWidthLength}
            maxWidth={maxWidthLength}
            height={heightLength}
            minHeight={minHeightLength}
            maxHeight={maxHeightLength}
            boxSizing={boxSizing}
            bgcolor={backgroundColor}
            color={color}
            border={borderAttr}
            padding={paddingAttr}
            margin={marginAttr}
            borderRadius={borderRads}
            {...rest}
        >
            {props.children}
        </MaterialBox>
    );
};

export default BoxBase;
