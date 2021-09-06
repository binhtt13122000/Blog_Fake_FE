import { createStyles, makeStyles, Theme } from "@material-ui/core";

const heightNavBar = 60;
const spacing = 8;
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            margin: theme.spacing(0),
        },
        table: {
            margin: spacing * 2,
            marginTop: heightNavBar + spacing * 2.5,
            width: "100%",
            height: "100%",
            [theme.breakpoints.down("md")]: {
                margin: 0,
                marginTop: heightNavBar,
            },
        },
        tableTitle: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            padding: "12px 6px",
        },
        verified: {
            backgroundColor: "rgb(0 216 0 / 43%)",
            color: "green",
            fontWeight: 600,
            padding: "6px 4px",
            borderRadius: "6px",
            textAlign: "center",
        },
        notVerify: {
            backgroundColor: "rgb(255 59 59 / 25%)",
            color: "red",
            fontWeight: 600,
            padding: "6px 4px",
            borderRadius: "6px",
            textAlign: "center",
        },
        tagAdmin: {
            color: "#0000ffb5",
            textAlign: "center",
            fontWeight: 500,
            textAlignLast: "left",
        },
        tagUser: {
            color: "#008000cc",
            textAlign: "center",
            fontWeight: 500,
            textAlignLast: "left",
        },
        tagEmpty: {
            backgroundColor: "red",
            color: "white",
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            borderRadius: "6px",
            textAlign: "center",
        },
    })
);
