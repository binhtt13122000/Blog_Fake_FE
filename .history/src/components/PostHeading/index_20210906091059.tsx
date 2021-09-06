import React from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";

import "react-markdown-editor-lite/lib/index.css";

export const useStyles = makeStyles((theme) => ({
    postTitle: {
        fontWeight: 500,
        fontSize: "26px",
    },
    subTitle: {
        fontWeigh: 400,
        color: "#818ea3",
        letterSpacing: "2px",
    },
}));
type PostHeadingProps = {
    subTitle: string;
    pageTitle: string;
};

const PostHeading: React.FC<PostHeadingProps> = ({ subTitle, pageTitle }: PostHeadingProps) => {
    return (
        <Box padding={2} width={1}>
            <Typography className={classes.subTitle} component="span" variant="subtitle1">
                {subTitle}
            </Typography>
            <Typography className={classes.postTitle} component="h3">
                {pageTitle}
            </Typography>
        </Box>
    );
};

export default PostHeading;
