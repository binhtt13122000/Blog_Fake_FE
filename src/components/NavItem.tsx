import React from "react";

import { Button, ListItem, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import useStyles from "./GlobalStyles";

type TypeNavItem = {
    title: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};
const NavItem: React.FC<TypeNavItem> = ({ title, icon: Icon, ...rest }) => {
    const classes = useStyles();
    return (
        <ListItem disableGutters {...rest}>
            <Button
                style={{ display: "block", width: "100%", textAlign: "left" }}
                className={classes.button}
            >
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        columnGap: "10px",
                    }}
                >
                    <Icon /> <span>{title}</span>
                </div>
            </Button>
        </ListItem>
    );
};

export default NavItem;
