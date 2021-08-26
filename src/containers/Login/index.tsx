import React, { useState } from "react";

import { useForm } from "react-hook-form";

import BoxBase from "../../components/Box/BoxBase/index";
import ButtonBase from "../../components/Button/ButtonBase/index";
import CircularProgressBase from "../../components/Loading/CircularProgressBase/index";
import TextFieldRhf from "../../components/TextField/TextFieldRhf/index";
import { Avatar, Link, Typography } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VerifiedUserOutlined from "@material-ui/icons/VerifiedUserOutlined";

import Images from "../../assets/images/undraw_Blogging.svg";

const useStyles = makeStyles((theme) => ({
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

const Login = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm();

    const submitHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        clearErrors();
    };
    const { ref: inputEmailRef, ...inputEmailProps } = register("email", {
        required: "Email không được để trống",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email không hợp lệ!",
        },
    });
    const { ref: inputPasswordRef, ...inputPasswordProps } = register("password", {
        required: "Password không được để trống",
        validate: (value) => value.length > 5 || "Độ dài password cần lớn hơn 5",
    });
    return (
        <BoxBase className={classes.root} display="flex">
            <CssBaseline />
            <BoxBase className={classes.image} width={1} height={1} />
            <BoxBase
                className={classes.rightSide}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={1}
                height={1}
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <VerifiedUserOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng Nhập
                    </Typography>
                    <form
                        className={classes.form}
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit(submitHandler)}
                    >
                        <TextFieldRhf
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            id="email"
                            label="Địa chỉ Email"
                            inputRef={inputEmailRef}
                            errorMessage={errors["email"] && errors["email"].message}
                            autoFocus
                            {...inputEmailProps}
                        />
                        <TextFieldRhf
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            inputRef={inputPasswordRef}
                            errorMessage={errors["password"] && errors["password"].message}
                            {...inputPasswordProps}
                        />
                        <ButtonBase
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            size="large"
                        >
                            {isLoading ? (
                                <CircularProgressBase variant="indeterminate" color="inherit" />
                            ) : (
                                "Đăng Nhập"
                            )}
                        </ButtonBase>
                    </form>
                    <BoxBase textAlign="center" width={1}>
                        <Typography
                            style={{ cursor: "pointer", paddingTop: "10px", paddingBottom: "10px" }}
                            color="primary"
                            variant="body2"
                        >
                            {"Chưa có tài khoản trước đây? Đăng kí"}
                        </Typography>
                    </BoxBase>
                    <BoxBase marginTop={{ value: 2 }} width={1}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {"Copyright © "}
                            <Link color="inherit" href="https://material-ui.com/">
                                Your Website
                            </Link>{" "}
                            {new Date().getFullYear()}
                            {"."}
                        </Typography>
                    </BoxBase>
                </div>
            </BoxBase>
        </BoxBase>
    );
};

export default Login;
