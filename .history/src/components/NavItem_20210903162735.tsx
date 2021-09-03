import React from "react";

import { Button, ListItem, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import useStyles from "./GlobalStyles";

type TypeNavItem = {
    title: string;
    icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">>;
};
const NavItem: React.FC<TypeNavItem> = ({ title, icon: Icon, ...rest }: TypeNavItem) => {
    const classes = useStyles();
    return (
        <ListItem disableGutters {...rest}>
            <Button className={classes.buttonNavItem}>
                <div className={classes.navItemInner}>
                    <Icon /> <span>{title}</span>
                </div>
            </Button>
        </ListItem>
    );
};

export default NavItem;
