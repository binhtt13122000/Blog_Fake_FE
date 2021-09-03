import React from "react";

import clsx from "clsx";

import { List, ListItemText } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import DrawerBase, { DrawerBaseProps, Anchor } from "..";

import { Story } from "@storybook/react";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
});
export const DefaultDrawerBase: React.FC<DrawerBaseProps> = (props: DrawerBaseProps) => {
    const classes = useStyles();
    const { anchor = "left", ...rest } = props;
    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <React.Fragment>
            <DrawerBase anchor={anchor} {...rest}>
                {list(anchor)}
            </DrawerBase>
        </React.Fragment>
    );
};
//👇 This default export determines where your story goes in the story list
export default {
    title: "Components/DrawerBase/PermanentDrawer/PermanentDrawer",
    component: DefaultDrawerBase,
    argTypes: {
        anchor: {
            options: ["top", "right", "bottom", "left"],
            control: { type: "select" },
        },
        variant: {
            options: ["temporary", "persistent", "permanent"],
            control: { type: "select" },
        },
    },
};

//👇 We create a “template” of how args map to rendering
const Template: Story<DrawerBaseProps> = (args) => <DefaultDrawerBase {...args} />;

export const Left = Template.bind({});

Left.args = {
    anchor: "left",
    variant: "permanent",
};

export const Right = Template.bind({});
Right.args = {
    anchor: "right",
    variant: "permanent",
};
