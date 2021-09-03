import React from "react";

import { useHistory } from "react-router";

import { Box, Link } from "@material-ui/core";

import { useStyles } from "../Layout/Auth/makeStyle";

type SwitchAuthProps = {
    linkDesc: string;
    href: string;
};

const SwitchAuth: React.FC<SwitchAuthProps> = ({ linkDesc, href }: SwitchAuthProps) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Box className={classes.textCenter}>
            <Link
                style={{ cursor: "pointer", paddingTop: "10px", paddingBottom: "10px" }}
                color="primary"
                variant="body2"
                onClick={() => {
                    history.push(href);
                }}
            >
                {linkDesc}
            </Link>
        </Box>
    );
};

export default SwitchAuth;
