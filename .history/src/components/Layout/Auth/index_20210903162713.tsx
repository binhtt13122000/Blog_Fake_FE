import React from "react";

import { Avatar, Grow } from "@material-ui/core";
import { VerifiedUserOutlined } from "@material-ui/icons";

import BoxBase from "../../Box/BoxBase/index";
import Copyright from "../../Copyright/index";
import { useStyles } from "./makeStyle";

const Layout: React.FC<{ children?: React.ReactNode }> = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const classes = useStyles();
    return (
        <BoxBase className={classes.root} display="flex">
            <BoxBase className={classes.image} />
            <BoxBase className={classes.content}>
                <Grow in={true} timeout={1000}>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <VerifiedUserOutlined />
                        </Avatar>
                        {children}
                        <Copyright />
                    </div>
                </Grow>
            </BoxBase>
        </BoxBase>
    );
};

export default Layout;
