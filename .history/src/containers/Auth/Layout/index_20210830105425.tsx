import React from "react";

import BoxBase from "../../../components/Box/BoxBase/index";
import { Avatar, CssBaseline, Grow } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { VerifiedUserOutlined } from "@material-ui/icons";

import { useStyles } from "../makeStyle";

export type Type = {
    children: React.ReactNode;
};
const Layout: React.FC<Type> = (props) => {
    const classes = useStyles();
    return (
        <BoxBase className={classes.root} display="flex">
            <CssBaseline />
            <BoxBase className={classes.image} width={1} height={1} />
            <BoxBase
                className={classes.rightSide}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={1}
                height={1}
            >
                <Grow in={true} timeout={1000}>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <VerifiedUserOutlined />
                        </Avatar>
                        {props.children}
                        <BoxBase marginTop={{ value: 2 }} width={1}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                {"Copyright © "}
                                <Link color="inherit" href="https://material-ui.com/">
                                    Your Website
                                </Link>{" "}
                                {new Date().getFullYear()}
                                {"."}
                            </Typography>
                        </BoxBase>
                    </div>
                </Grow>
            </BoxBase>
        </BoxBase>
    );
};

export default Layout;
