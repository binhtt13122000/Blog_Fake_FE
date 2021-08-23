import { Alert as MaterialAlert, AlertProps as MaterialAlertProps } from "@material-ui/lab";

export interface AlertBaseProps extends MaterialAlertProps {
    message?: string;
}

const AlertBase = (props: AlertBaseProps) => {
    const { message = "This is default text", ...rest } = props;
    return <MaterialAlert {...rest}>{message}</MaterialAlert>;
};

export default AlertBase;
