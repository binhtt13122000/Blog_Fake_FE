import React from "react";

import { Box } from "@material-ui/core";

const PostHeading = () => {
    return (
        <Box padding={2} width={1}>
            <Typography className={classes.subTitle} component="span" variant="subtitle1">
                Blog Posts
            </Typography>
            <Typography className={classes.postTitle} component="h3">
                Add New Post
            </Typography>
        </Box>
    );
};

export default PostHeading;
