import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const heightNavBar = 64;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        appBar: {
            height: heightNavBar,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            top: heightNavBar,
            width: drawerWidth,
        },
        fullList: {
            width: "45%",
            minWidth: drawerWidth,
            maxWidth: drawerWidth * 1.5,
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        buttonNavItem: {
            display: "block",
            width: "100%",
            textAlign: "left",
            "&:hover": {
                backgroundColor: "#efefefa8",
                color: "#3c52b2",
            },
        },
        navItemInner: {
            display: "inline-flex",
            alignItems: "center",
            columnGap: "10px",
        },
    })
);

export default useStyles;
