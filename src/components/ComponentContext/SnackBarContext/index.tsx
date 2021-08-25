import React, { createContext, useContext } from "react";

import { SnackbarCloseReason } from "@material-ui/core";

import CustomizedSnackbars, { SnackBarBaseProps } from "../../SnackBar/SnackBarBase";

type SnackBarContextActions = {
    showSnackBar: (props: SnackBarBaseProps) => void;
    onClose?: (event: React.SyntheticEvent<Element, Event>, reason?: SnackbarCloseReason) => void;
};

const SnackBarContext = createContext({} as SnackBarContextActions);

interface SnackBarContextProviderProps {
    children: React.ReactNode;
}

const SnackBarProvider: React.FC<SnackBarContextProviderProps> = ({ children }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [timeHide, setTimeHide] = React.useState<number>();
    const [message, setMessage] = React.useState<string>("");
    const [propsSnackBar, setPropsSnackBar] = React.useState<SnackBarBaseProps>();

    const showSnackBar = ({
        message = "This is the text",
        autoHideDuration = 2000,
        ...rest
    }: SnackBarBaseProps) => {
        setMessage(message);
        setOpen(true);
        setTimeHide(autoHideDuration);
        setPropsSnackBar(rest);
    };

    const onClose = (event: React.SyntheticEvent<Element, Event>, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <SnackBarContext.Provider value={{ showSnackBar }}>
            <CustomizedSnackbars
                open={open}
                message={message}
                autoHideDuration={timeHide}
                onClose={onClose}
                {...propsSnackBar}
            />
            {children}
        </SnackBarContext.Provider>
    );
};

const useSnackBar = (): SnackBarContextActions => {
    const context = useContext(SnackBarContext);

    if (!context) {
        throw new Error("useSnackBar must be used within an SnackBarProvider");
    }

    return context;
};

export { SnackBarProvider, useSnackBar };
