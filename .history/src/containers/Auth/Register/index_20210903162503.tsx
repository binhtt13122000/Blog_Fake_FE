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

const Register: React.FC = () => {
    const classes = useStyles();
    const { isLoading, authenticate } = useAuth();
    const {
        register,
        handleSubmit,
        clearErrors,
        getValues,
        formState: { errors },
    } = useForm();

    const submitHandlerRegister = () => {
        const data = {
            email: getValues("email"),
            password: getValues("password"),
            firstname: getValues("firstName"),
            lastname: getValues("lastName"),
            mobile: getValues("phoneNumber"),
        };
        authenticate(data, false);
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
        required: "Mật khẩu không được để trống",
        validate: (value) =>
            value.length <= 5
                ? "Độ dài mật khẩu cần lớn hơn 5"
                : !/[A-Z]/.test(value)
                ? "Cần chứa ít nhất 1 chữ in hoa"
                : !/[0-9]/.test(value)
                ? "Cần chứa ít nhất 1 chữ số"
                : /[$@%^&*(){}[\]!]/.test(value) || "Cần chứa ít nhất 1 kí tự đặc biệt",
    });
    const { ref: confirmPasswordRef, ...confirmPasswordProps } = register("confirmPassword", {
        required: "Xác nhận không được để trống",
        validate: (value) =>
            value == getValues("password") || "Xác nhận cần trùng khớp với mật khẩu",
    });
    const { ref: firstNameRef, ...firstNameProps } = register("firstName", {
        required: "Tên không được để trống",
    });
    const { ref: lastNameRef, ...lastNameProps } = register("lastName", {
        required: "Họ không được để trống",
    });
    const { ref: phoneNumberRef, ...phoneNumberProps } = register("phoneNumber", {
        required: "Số điện thoại không được để trống",
        validate: (value) =>
            new RegExp(/([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/).test(value) ||
            "Số điện thoại không hợp lệ",
    });
    return (
        <Layout>
            <Typography component="h1" variant="h5">
                Đăng Kí
            </Typography>
            <form
                className={classes.form}
                // autoComplete="off"
                noValidate
                onSubmit={handleSubmit(submitHandlerRegister)}
            >
                <TextFieldRhf
                    variant="outlined"
                    margin="normal"
                    className={classes.halfTextField}
                    required
                    autoFocus
                    id="firstName"
                    label="Tên"
                    inputRef={firstNameRef}
                    errorMessage={errors["firstName"] && errors["firstName"].message}
                    {...firstNameProps}
                />
                <TextFieldRhf
                    variant="outlined"
                    margin="normal"
                    className={classes.halfTextField}
                    required
                    id="lastName"
                    label="Họ"
                    inputRef={lastNameRef}
                    errorMessage={errors["lastName"] && errors["lastName"].message}
                    {...lastNameProps}
                />
                <TextFieldRhf
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="phoneNumber"
                    label="Số Điện Thoại"
                    inputRef={phoneNumberRef}
                    errorMessage={errors["phoneNumber"] && errors["phoneNumber"].message}
                    {...phoneNumberProps}
                />
                <TextFieldRhf
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="email"
                    label="Địa Chỉ Email"
                    inputRef={emailRef}
                    errorMessage={errors["email"] && errors["email"].message}
                    {...emailProps}
                />
                <TextFieldRhf
                    variant="outlined"
                    margin="normal"
                    className={classes.halfTextField}
                    required
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    inputRef={passwordRef}
                    errorMessage={errors["password"] && errors["password"].message}
                    {...passwordProps}
                />
                <TextFieldRhf
                    variant="outlined"
                    margin="normal"
                    className={classes.halfTextField}
                    required
                    type="password"
                    id="confirmPassword"
                    label="Xác Nhận"
                    inputRef={confirmPasswordRef}
                    errorMessage={errors["confirmPassword"] && errors["confirmPassword"].message}
                    {...confirmPasswordProps}
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
                        "Đăng Kí"
                    )}
                </ButtonBase>
            </form>
            <SwitchAuth linkDesc="Đã có tài khoản? Đăng nhập" href="/login" />
        </Layout>
    );
};

export default Register;
