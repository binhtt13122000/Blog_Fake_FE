import React from "react";

import { Drawer, Hidden } from "@material-ui/core";

import useStyles from "../GlobalStyles";

type SideBarType = {
    open: boolean;
    onCloseSideBar: () => void;
};

const SideBar: React.FC<SideBarType> = ({ children, open, onCloseSideBar, ...rest }) => {
    const classes = useStyles();

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    className={classes.fullList}
                    variant="temporary"
                    anchor="left"
                    open={open}
                    onClose={onCloseSideBar}
                    // classes={{
                    //     paper: classes.drawerPaper,
                    // }}
                >
                    {children}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    anchor="left"
                    open
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {children}
                </Drawer>
            </Hidden>
        </>
    );
};

export default SideBar;
