import React, { createContext, useState } from "react";

import Axios from "axios";

export type AuthenticationState = {
    isLoading: boolean;
    login: (email: string, password: string) => void;
};

const contextDefaultValues: AuthenticationState = {
    isLoading: false,
    login: () => {},
};

export const AuthenticateContext = createContext<AuthenticationState>(contextDefaultValues);

const AuthenticateProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(contextDefaultValues.isLoading);
    const headers = {
        "Content-Type": "application/json;",
        "Access-Control-Allow-Origin": "*",
    };
    const login = (email: string, password: string) => {
        console.log(email);
        setIsLoading(true);
        Axios({
            url: `http://localhost:8082/api/login`,
            method: "POST",
            headers: {
                ...headers,
            },
            data: { email: email, password: password },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.status === 200) {
                    console.log(res.data);
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    return (
        <AuthenticateContext.Provider
            value={{
                isLoading,
                login,
            }}
        >
            {children}
        </AuthenticateContext.Provider>
    );
};

export default AuthenticateProvider;
