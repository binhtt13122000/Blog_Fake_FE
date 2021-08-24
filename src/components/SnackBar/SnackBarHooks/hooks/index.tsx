import { useState, useEffect } from "react";

import { SnackbarCloseReason } from "@material-ui/core";

const useSnackBar = () => {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState("");
    const [timeHide, setTimeHide] = useState<number>();

    useEffect(() => {
        if (isActive) {
            const varTimeOut = setTimeout(() => {
                setIsActive(false);
            }, timeHide);
            return () => {
                clearTimeout(varTimeOut);
            };
        }
    }, [isActive, timeHide]);

    const openSnackBar = (msg: string = "This is default message", timeHide = 5000) => {
        setMessage(msg);
        setIsActive(true);
        setTimeHide(timeHide);
    };

    const handleClose = (
        event: React.SyntheticEvent<Element, Event>,
        reason?: SnackbarCloseReason
    ) => {
        if (reason === "clickaway") {
            return;
        }
        setIsActive(false);
        setMessage("");
        setTimeHide(0);
    };

    return { isActive, timeHide, message, openSnackBar, handleClose };
};

export default useSnackBar;
