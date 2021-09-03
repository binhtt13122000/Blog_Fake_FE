import { makeStyles } from "@material-ui/core/styles";

import Images from "../../../assets/images/undraw_Blogging.svg";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            height: "fit-content",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    image: {
        width: "100%",
        height: "100%",
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
    content: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
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
            padding: theme.spacing(2),
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    halfTextField: {
        width: "48%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            maxWidth: "100%",
        },
    },
    textCenter: {
        textAlign: "center",
        width: "100%",
    },
}));
