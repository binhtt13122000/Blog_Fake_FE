import React from "react";

import { Drawer, Hidden } from "@material-ui/core";

import useStyles from "../GlobalStyles";

type SideBarType = {
    open: boolean;
    onCloseSideBar: () => void;
    children?: React.ReactNode;
};

const SideBar: React.FC<SideBarType> = ({
    children,
    open,
    onCloseSideBar,
    ...rest
}: SideBarType) => {
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
                    {...rest}
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
                    {...rest}
                >
                    {children}
                </Drawer>
            </Hidden>
        </>
    );
};

export default SideBar;
