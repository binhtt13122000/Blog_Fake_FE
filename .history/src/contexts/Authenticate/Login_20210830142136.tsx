import React, { createContext, useState } from "react";

export type AuthenticationActions = {
    isLoading: boolean;
    handleLoading: (check: boolean) => void;
};

export const AuthenticateContext = createContext<AuthenticationActions>({
    isLoading: false,
    handleLoading: (check) => {},
});

const AuthenticateProvider: React.FC<{ children?: React.ReactNode }> = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLoading = (check: boolean) => {
        setIsLoading(check);
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
