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
    width?: number;
    height?: number;
    bgcolor?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
    typeColor?: "main" | "light" | "dark";
}

const BoxBase = (props: BoxBaseProps) => {
    const { bgcolor, typeColor = "main", ...rest } = props;
    if (bgcolor != null) {
        return (
            <MaterialBox
                bgcolor={replyTheme.palette[bgcolor][typeColor]}
                color={replyTheme.palette[bgcolor].contrastText}
                {...rest}
            >
                {props.children}
            </MaterialBox>
        );
    }
    return <MaterialBox {...rest}>{props.children}</MaterialBox>;
};

export default BoxBase;
