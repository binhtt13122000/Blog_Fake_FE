import { Drawer as MaterialDrawer, DrawerProps as MaterialDrawerProps } from "@material-ui/core";

export interface DrawerBaseProps extends MaterialDrawerProps {}

export type Anchor = "top" | "right" | "bottom" | "left";

const DrawerBase = ({ children, ...rest }: DrawerBaseProps) => {
    return <MaterialDrawer {...rest}>{children}</MaterialDrawer>;
};

export default DrawerBase;
