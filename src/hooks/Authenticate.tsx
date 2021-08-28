import { useCallback, useContext } from "react";

import Axios from "axios";

import { AuthenticateContext } from "../contexts/Authenticate/Login";

const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
};
const useAuth = () => {
    const { isLoading, handleLoading } = useContext(AuthenticateContext);
    const authenticate = useCallback(
        (data: Object, isLogin: boolean) => {
            handleLoading(true);
            const url = isLogin ? "/login" : "​/register";
            Axios({
                baseURL: "http://localhost:8082/api",
                url: url,
                method: "POST",
                headers: {
                    ...headers,
                },
                data: data,
            })
                .then((res) => {
                    handleLoading(false);
                    console.log(res);
                    if (res.status === 200) {
                        console.log(res.data);
                    }
                })
                .catch((err) => {
                    handleLoading(false);
                    console.log(err);
                });
        },
        [handleLoading]
    );
    return { isLoading, authenticate };
};

export default useAuth;
