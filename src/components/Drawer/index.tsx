import { Drawer as MaterialDrawer, DrawerProps as MaterialDrawerProps } from "@material-ui/core";

export type DrawerBaseProps = MaterialDrawerProps;

export type Anchor = "top" | "right" | "bottom" | "left";

const DrawerBase: React.FC<DrawerBaseProps> = ({ children, ...rest }: DrawerBaseProps) => {
    return <MaterialDrawer {...rest}>{children}</MaterialDrawer>;
};

export default DrawerBase;
