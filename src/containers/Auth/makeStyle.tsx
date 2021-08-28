import { makeStyles } from "@material-ui/core/styles";

import Images from "../../assets/images/undraw_Blogging.svg";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        position: "relative",
    },
    image: {
        backgroundImage: `url(${Images})`,
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",

        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        [theme.breakpoints.down("xs")]: {
            backgroundSize: "contain",
        },
    },
    rightSide: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    paper: {
        width: "100%",
        maxWidth: "610px",
        padding: theme.spacing(4),
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "12px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        [theme.breakpoints.down("xs")]: {
            maxWidth: "100%",
            padding: theme.spacing(4),
            margin: "initial",
            borderRadius: "initial",
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
