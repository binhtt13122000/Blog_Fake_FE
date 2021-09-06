import React, { useState } from "react";

import BoxBase from "../../components/Box/BoxBase/index";
import ButtonBase from "../../components/Button/ButtonBase/index";
import DashBoardMain from "../../components/DashBoardMain";
import PostHeading from "../../components/PostHeading";
import TextFieldRhf from "../../components/TextField/TextFieldRhf/index";
import { Avatar, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ErrorIcon from "@material-ui/icons/Error";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const heightNavBar = 60;
const drawerWidth = 240;
const spacing = 30;
export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: heightNavBar + spacing,
        marginLeft: drawerWidth + spacing,
        marginRight: spacing,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0,
            width: "100%",
            alignItems: "center",
        },
    },
    avatar: {
        marginTop: theme.spacing(1),
        position: "relative",
    },
    verifyIcon: {
        position: "absolute",
        bottom: "14px",
        right: "20px",
        transform: "translate(50%,50%)",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
    profileTop: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "10px",
    },
    profileContent: {
        height: "max-content",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow:
            "0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%), 0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%)",
        [theme.breakpoints.down("md")]: {
            borderRadius: "0",
        },
    },
    profileMain: {
        padding: theme.spacing(4),
        paddingTop: theme.spacing(1),
    },
    profileActions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    profileAction: {
        margin: theme.spacing(3, 2, 2),
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    halfTextField: {
        width: "49%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    textArea: {
        resize: "none",
    },
    "@global": {
        "*::-webkit-scrollbar": {
            width: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
            borderRadius: "10px",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
        },
        "*::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,255,243,1)",
        },
    },
}));

const UserProfile: React.FC = () => {
    const classes = useStyles();
    const isVerify = true;
    const [isEdit, setIsEdit] = useState(false);
    return (
        <>
            <DashBoardMain />
            <BoxBase className={classes.root}>
                <PostHeading subTitle="Blog Posts" pageTitle="Personal Information" />
                <BoxBase className={classes.profileContent}>
                    <BoxBase className={classes.profileTop}>
                        <div className={classes.avatar}>
                            <Avatar
                                style={{
                                    width: "120px",
                                    height: "120px",
                                }}
                                src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                            />
                            <Tooltip
                                title={
                                    isVerify
                                        ? "Your account have been verified"
                                        : "Your account is not verified yet."
                                }
                            >
                                {isVerify ? (
                                    <VerifiedUserIcon
                                        fontSize="small"
                                        color="primary"
                                        className={classes.verifyIcon}
                                    />
                                ) : (
                                    <ErrorIcon
                                        fontSize="small"
                                        color="error"
                                        className={classes.verifyIcon}
                                    />
                                )}
                            </Tooltip>
                        </div>
                    </BoxBase>
                    <BoxBase className={classes.profileMain}>
                        <form className={classes.form} autoComplete="off" noValidate>
                            <TextFieldRhf
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="firstName"
                                disabled={!isEdit}
                                label="First Name"
                                value="David"
                                className={classes.halfTextField}
                            />
                            <TextFieldRhf
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                disabled={!isEdit}
                                label="Last Name"
                                id="lastName"
                                value="Paul"
                                className={classes.halfTextField}
                            />
                            <TextFieldRhf
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                disabled={!isEdit}
                                className={classes.halfTextField}
                                id="mobile"
                                label="Phone Number"
                                value="0902472118"
                            />
                            <TextFieldRhf
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                disabled={!isEdit}
                                className={classes.halfTextField}
                                type="email"
                                label="Email"
                                id="email"
                                value="Danhskipper18@gmail.com"
                            />
                            <TextFieldRhf
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                maxRows={4}
                                className={classes.textArea}
                                disabled={!isEdit}
                                label="Introduction"
                                multiline
                                rows={4}
                                rowsMax={4}
                                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                            <div className={classes.profileActions}>
                                <ButtonBase
                                    variant="contained"
                                    color={isEdit ? "default" : "primary"}
                                    className={classes.profileAction}
                                    size="large"
                                    onClick={() => {
                                        setIsEdit((previous) => {
                                            return !previous;
                                        });
                                    }}
                                >
                                    {isEdit ? "Cancel" : "Edit Profile"}
                                </ButtonBase>
                                {isEdit && (
                                    <ButtonBase
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className={classes.profileAction}
                                        size="large"
                                    >
                                        Save
                                    </ButtonBase>
                                )}
                            </div>
                        </form>
                    </BoxBase>
                </BoxBase>
            </BoxBase>
        </>
    );
};

export default UserProfile;
