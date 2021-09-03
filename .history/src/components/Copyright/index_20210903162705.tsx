import React from "react";

import { Link, Typography } from "@material-ui/core";

import BoxBase from "../Box/BoxBase";

const Copyright: React.FC = () => {
    return (
        <BoxBase marginTop={{ value: 2 }} width={1}>
            <Typography variant="body2" color="textSecondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://material-ui.com/">
                    F-Blog
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </BoxBase>
    );
};

export default Copyright;
