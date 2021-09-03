import React from "react";

import { useForm } from "react-hook-form";

import ButtonBase from "../../../components/Button/ButtonBase/index";
import Layout from "../../../components/Layout/Auth/index";
import { useStyles } from "../../../components/Layout/Auth/makeStyle";
import CircularProgressBase from "../../../components/Loading/CircularProgressBase/index";
import SwitchAuth from "../../../components/SwitchAuth/index";
import TextFieldRhf from "../../../components/TextField/TextFieldRhf/index";
import { Typography } from "@material-ui/core";

import useAuth from "../../../hooks/Authenticate";

const Login: React.FC = () => {
    const classes = useStyles();
    const { isLoading, authenticate } = useAuth();

    const {
        register,
        handleSubmit,
        clearErrors,
        getValues,
        formState: { errors },
    } = useForm();

    const submitHandler = () => {
        const data = {
            email: getValues("email"),
            password: getValues("password"),
        };
        authenticate(data, true);
        clearErrors();
    };
    const { ref: emailRef, ...emailProps } = register("email", {
        required: "Email không được để trống",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email không hợp lệ!",
        },
    });
    const { ref: passwordRef, ...passwordProps } = register("password", {
        required: "Password không được để trống",
        validate: (value) => value.length > 5 || "Độ dài password cần lớn hơn 5",
    });
    return (
        <Layout>
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
                    inputRef={emailRef}
                    errorMessage={errors["email"] && errors["email"].message}
                    autoFocus
                    {...emailProps}
                />
                <TextFieldRhf
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    inputRef={passwordRef}
                    errorMessage={errors["password"] && errors["password"].message}
                    {...passwordProps}
                />
                <ButtonBase
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isLoading}
                    size="large"
                >
                    {isLoading ? (
                        <CircularProgressBase variant="indeterminate" color="primary" />
                    ) : (
                        "Đăng Nhập"
                    )}
                </ButtonBase>
            </form>
            <SwitchAuth linkDesc="Chưa có tài khoản trước đây? Đăng kí" href="/register" />
        </Layout>
    );
};

export default Login;
