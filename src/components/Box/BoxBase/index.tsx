import { Box as MaterialBox, BoxProps as MaterialBoxProps } from "@material-ui/core";

import replyTheme from "../../../theme/replyTheme";

const theme = {
    spacing: 8,
};

export interface BoxBaseProps extends MaterialBoxProps {
    display?: "flex" | "inline-flex" | "block" | "inline-block" | "inline";
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
    width?: number | "fit-content" | "max-content" | "min-content" | "auto";
    maxWidth?: number | "fit-content" | "max-content" | "min-content" | "auto";
    minWidth?: number | "fit-content" | "max-content" | "min-content" | "auto";
    height?: number | "fit-content" | "max-content" | "min-content" | "auto";
    maxHeight?: number | "fit-content" | "max-content" | "min-content" | "auto";
    minHeight?: number | "fit-content" | "max-content" | "min-content" | "auto";
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
    borderTopLeftRadius?: { length: number; unit: "px" | "%" };
    borderTopRightRadius?: { length: number; unit: "px" | "%" };
    borderBottomRightRadius?: { length: number; unit: "px" | "%" };
    borderBottomLeftRadius?: { length: number; unit: "px" | "%" };
    margin?: {
        value: number;
        unit?: "%";
    };
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
    padding?: {
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
    flexBasis?: {
        value:
            | number
            | "auto"
            | "fill"
            | "max-content"
            | "min-content"
            | "fit-content"
            | "content"
            | "inherit"
            | "initial"
            | "revert"
            | "unset";
        unit?: "px";
    };
    overflow?:
        | "visible"
        | "hidden"
        | "clip"
        | "scroll"
        | "auto"
        | "visible"
        | "inherit"
        | "initial"
        | "revert"
        | "unset";
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
        borderTopLeftRadius = "initial",
        borderTopRightRadius = "initial",
        borderBottomRightRadius = "initial",
        borderBottomLeftRadius = "initial",
        margin = "initial",
        marginTop = "initial",
        marginRight = "initial",
        marginBottom = "initial",
        marginLeft = "initial",
        padding = "initial",
        paddingTop = "initial",
        paddingRight = "initial",
        paddingBottom = "initial",
        paddingLeft = "initial",
        flexBasis = "initial",
        ...rest
    } = props;
    const widthLength =
        typeof width === "string"
            ? width
            : width >= 0 && width <= 1
            ? `${width * 100}%`
            : `${width}px`;
    const minWidthLength =
        typeof minWidth === "string"
            ? minWidth
            : minWidth >= 0 && minWidth <= 1
            ? `${minWidth * 100}%`
            : `${minWidth}px`;
    const maxWidthLength =
        typeof maxWidth === "string"
            ? maxWidth
            : maxWidth >= 0 && maxWidth <= 1
            ? `${maxWidth * 100}%`
            : `${maxWidth}px`;
    const heightLength =
        typeof height === "string"
            ? height
            : height >= 0 && height <= 1
            ? `${height * 100}%`
            : `${height}px`;
    const minHeightLength =
        typeof minHeight === "string"
            ? minHeight
            : minHeight >= 0 && minHeight <= 1
            ? `${minHeight * 100}%`
            : `${minHeight}px`;
    const maxHeightLength =
        typeof maxHeight === "string"
            ? maxHeight
            : maxHeight >= 0 && maxHeight <= 1
            ? `${maxHeight * 100}%`
            : `${maxHeight}px`;

    const borderRads = borderRadius === "initial" ? "" : borderRadius.length + borderRadius.unit;
    const borderTopLeftRads =
        borderTopLeftRadius === "initial"
            ? ""
            : borderTopLeftRadius.length + borderTopLeftRadius.unit;
    const borderTopRightRads =
        borderTopRightRadius === "initial"
            ? ""
            : borderTopRightRadius.length + borderTopRightRadius.unit;
    const borderBottomRightRads =
        borderBottomRightRadius === "initial"
            ? ""
            : borderBottomRightRadius.length + borderBottomRightRadius.unit;
    const borderBottomLeftRads =
        borderBottomLeftRadius === "initial"
            ? ""
            : borderBottomLeftRadius.length + borderBottomLeftRadius.unit;

    const borderAttr = border === "initial" ? "" : `${border.length}px ${border.style}`;

    const backgroundColor = bgcolor === "initial" ? "" : replyTheme.palette[bgcolor][typeColor];
    const color = bgcolor === "initial" ? "" : replyTheme.palette[bgcolor].contrastText;

    const paddingAttr =
        padding === "initial"
            ? ""
            : padding.unit
            ? `${padding.value + padding.unit}`
            : `${padding.value * theme.spacing}px`;
    const padTop =
        paddingTop === "initial"
            ? ""
            : paddingTop.unit
            ? `${paddingTop.value + paddingTop.unit}`
            : `${paddingTop.value * theme.spacing}px`;
    const padRight =
        paddingRight === "initial"
            ? ""
            : paddingRight.unit
            ? `${paddingRight.value + paddingRight.value}`
            : `${paddingRight.value * theme.spacing}px`;
    const padBottom =
        paddingBottom === "initial"
            ? ""
            : paddingBottom.unit
            ? `${paddingBottom.value + paddingBottom.value}`
            : `${paddingBottom.value * theme.spacing}px`;
    const padLeft =
        paddingLeft === "initial"
            ? ""
            : paddingLeft.unit
            ? `${paddingLeft.value + paddingLeft.value}`
            : `${paddingLeft.value * theme.spacing}px`;

    const marginAttr =
        margin === "initial"
            ? ""
            : margin.unit
            ? `${margin.value + margin.unit}`
            : `${margin.value * theme.spacing}px`;
    const marTop =
        marginTop === "initial"
            ? ""
            : marginTop.unit
            ? `${marginTop.value + marginTop.unit}`
            : `${marginTop.value * theme.spacing}px`;
    const marRight =
        marginRight === "initial"
            ? ""
            : marginRight.unit
            ? `${marginRight.value + marginRight.unit}`
            : `${marginRight.value * theme.spacing}px`;
    const marBottom =
        marginBottom === "initial"
            ? ""
            : marginBottom.unit
            ? `${marginBottom.value + marginBottom.unit}`
            : `${marginBottom.value * theme.spacing}px`;
    const marLeft =
        marginLeft === "initial"
            ? ""
            : marginLeft.unit
            ? `${marginLeft.value + marginLeft.unit}`
            : `${marginLeft.value * theme.spacing}px`;

    const flexBasisAttr =
        flexBasis === "initial"
            ? ""
            : flexBasis.unit && typeof flexBasis.value === "number"
            ? `${flexBasis.value + flexBasis.unit}`
            : flexBasis.value;
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
            paddingTop={padTop}
            paddingRight={padRight}
            paddingBottom={padBottom}
            paddingLeft={padLeft}
            margin={marginAttr}
            marginTop={marTop}
            marginRight={marRight}
            marginBottom={marBottom}
            marginLeft={marLeft}
            borderRadius={borderRads}
            style={{
                borderTopLeftRadius: borderTopLeftRads,
                borderTopRightRadius: borderTopRightRads,
                borderBottomRightRadius: borderBottomRightRads,
                borderBottomLeftRadius: borderBottomLeftRads,
            }}
            flexBasis={flexBasisAttr}
            {...rest}
        >
            {props.children}
        </MaterialBox>
    );
};

export default BoxBase;
