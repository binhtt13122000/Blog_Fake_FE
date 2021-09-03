import React from "react";

import { Badge, Hidden, IconButton, Tooltip } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";

import BoxBase from "../Box/BoxBase";
import useStyles from "../GlobalStyles";

type Props = {
    onOpenMobileNav: () => void;
};
const NavBar: React.FC<Props> = ({ onOpenMobileNav }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        F-Blog
                    </Typography>
                    <BoxBase flexGrow={1} />
                    <Hidden mdDown>
                        <Tooltip title="Notification">
                            <IconButton color="inherit" size="medium">
                                <Badge badgeContent={4} color="primary" variant="dot">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Logout">
                            <IconButton color="inherit" size="medium">
                                <InputIcon />
                            </IconButton>
                        </Tooltip>
                    </Hidden>
                    <Hidden lgUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={onOpenMobileNav}
                            edge="start"
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
