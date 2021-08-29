import React, { createContext, useState } from "react";

export type AuthenticationActions = {
    isLoading: boolean;
    handleLoading: (check: boolean) => void;
};

export const AuthenticateContext = createContext<AuthenticationActions>({
    isLoading: false,
    handleLoading: () => {},
});

const AuthenticateProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLoading = (check: boolean) => {
        let checked = check;
        setIsLoading(checked);
    };
    return (
        <AuthenticateContext.Provider
            value={{
                isLoading,
                handleLoading,
            }}
        >
            {children}
        </AuthenticateContext.Provider>
    );
};

export default AuthenticateProvider;
