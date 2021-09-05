import React from "react";

import { Box, Link, SvgIconProps, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "react-markdown-editor-lite/lib/index.css";

export const useStyles = makeStyles((theme) => ({
    postTagItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        columnGap: 4,
    },
}));
type ActionItemProps = {
    icon?: React.ReactElement<SvgIconProps>;
    textStatus?: string;
    textAction?: string;
    children?: React.ReactNode;
    action?: () => void;
};

const ActionItem: React.FC<ActionItemProps> = ({
    icon,
    textStatus,
    textAction = "Default",
    action,
    children,
}: ActionItemProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.postTagItem}>
            {icon}
            <Typography variant="body2" color="textSecondary" component="p">
                {textStatus}
            </Typography>
            {children}
            {action && (
                <Link
                    variant="body2"
                    component="p"
                    style={{ marginLeft: "auto", cursor: "pointer" }}
                    onClick={action}
                >
                    {textAction}
                </Link>
            )}
        </Box>
    );
};

export default ActionItem;
