import { Box as MaterialBox, BoxProps as MaterialBoxProps } from "@material-ui/core";

import replyTheme from "../../../theme/replyTheme";

const theme = {
    spacing: 8,
};

export interface BoxBaseProps extends MaterialBoxProps {
    display?: "flex" | "block" | "inline-block";
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
    width?: number;
    maxWidth?: number;
    minWidth?: number;
    height?: number;
    maxHeight?: number;
    minHeight?: number;
    bgcolor?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
    typeColor?: "main" | "light" | "dark";
    boxSizing?: "content-box" | "border-box" | "initial" | "inherit";
    border?: {
        length: number;
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
    marginTop?: {
        value: number;
        unit?: "%";
    };
    marginRight?: {
        value: number;
        unit?: "%";
    };
    marginBottom?: {
        value: number;
        unit?: "%";
    };
    marginLeft?: {
        value: number;
        unit?: "%";
    };
    paddingTop?: {
        value: number;
        unit?: "%";
    };
    paddingRight?: {
        value: number;
        unit?: "%";
    };
    paddingBottom?: {
        value: number;
        unit?: "%";
    };
    paddingLeft?: {
        value: number;
        unit?: "%";
    };
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "inherit" | "initial" | "revert" | "unset";
    flexGrow?: number | "inherit" | "initial" | "revert" | "unset";
    flexShrink?: number | "inherit" | "initial" | "revert" | "unset";
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
        marginTop = "initial",
        marginRight = "initial",
        marginBottom = "initial",
        marginLeft = "initial",
        paddingTop = "initial",
        paddingRight = "initial",
        paddingBottom = "initial",
        paddingLeft = "initial",
        ...rest
    } = props;
    const widthLength =
        width === "initial" ? width : width >= 0 && width <= 1 ? `${width * 100}%` : `${width}px`;
    const minWidthLength =
        minWidth === "initial"
            ? minWidth
            : minWidth >= 0 && minWidth <= 1
            ? `${minWidth * 100}%`
            : `${minWidth}px`;
    const maxWidthLength =
        maxWidth === "initial"
            ? maxWidth
            : maxWidth >= 0 && maxWidth <= 1
            ? `${maxWidth * 100}%`
            : `${maxWidth}px`;
    const heightLength =
        height === "initial"
            ? height
            : height >= 0 && height <= 1
            ? `${height * 100}%`
            : `${height}px`;
    const minHeightLength =
        minHeight === "initial"
            ? minHeight
            : minHeight >= 0 && minHeight <= 1
            ? `${minHeight * 100}%`
            : `${minHeight}px`;
    const maxHeightLength =
        maxHeight === "initial"
            ? maxHeight
            : maxHeight >= 0 && maxHeight <= 1
            ? `${maxHeight * 100}%`
            : `${maxHeight}px`;

    const borderRads =
        borderRadius === "initial" ? borderRadius : borderRadius.length + borderRadius.unit;

    const borderAttr = border === "initial" ? border : `${border.length}px ${border.style}`;

    const backgroundColor =
        bgcolor === "initial" ? bgcolor : replyTheme.palette[bgcolor][typeColor];
    const color = bgcolor === "initial" ? bgcolor : replyTheme.palette[bgcolor].contrastText;

    const padTop =
        paddingTop === "initial"
            ? paddingTop
            : paddingTop.unit
            ? `${paddingTop.value + paddingTop.unit}`
            : `${paddingTop.value * theme.spacing}px`;
    const padRight =
        paddingRight === "initial"
            ? paddingRight
            : paddingRight.unit
            ? `${paddingRight.value + paddingRight.value}`
            : `${paddingRight.value * theme.spacing}px`;
    const padBottom =
        paddingBottom === "initial"
            ? paddingBottom
            : paddingBottom.unit
            ? `${paddingBottom.value + paddingBottom.value}`
            : `${paddingBottom.value * theme.spacing}px`;
    const padLeft =
        paddingLeft === "initial"
            ? paddingLeft
            : paddingLeft.unit
            ? `${paddingLeft.value + paddingLeft.value}`
            : `${paddingLeft.value * theme.spacing}px`;

    const marTop =
        marginTop === "initial"
            ? marginTop
            : marginTop.unit
            ? `${marginTop.value + marginTop.unit}`
            : `${marginTop.value * theme.spacing}px`;
    const marRight =
        marginRight === "initial"
            ? marginRight
            : marginRight.unit
            ? `${marginRight.value + marginRight.unit}`
            : `${marginRight.value * theme.spacing}px`;
    const marBottom =
        marginBottom === "initial"
            ? marginBottom
            : marginBottom.unit
            ? `${marginBottom.value + marginBottom.unit}`
            : `${marginBottom.value * theme.spacing}px`;
    const marLeft =
        marginLeft === "initial"
            ? marginLeft
            : marginLeft.unit
            ? `${marginLeft.value + marginLeft.unit}`
            : `${marginLeft.value * theme.spacing}px`;

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
            paddingTop={padTop}
            paddingRight={padRight}
            paddingBottom={padBottom}
            paddingLeft={padLeft}
            marginTop={marTop}
            marginRight={marRight}
            marginBottom={marBottom}
            marginLeft={marLeft}
            borderRadius={borderRads}
            {...rest}
        >
            {props.children}
        </MaterialBox>
    );
};

export default BoxBase;
