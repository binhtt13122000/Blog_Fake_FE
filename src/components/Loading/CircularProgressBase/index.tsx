import {
    CircularProgress as MaterialCircularProgress,
    CircularProgressProps as MaterialCircularProgressProps,
} from "@material-ui/core";

export interface CircularProgressProps extends MaterialCircularProgressProps {}

const CircularProgressBase = (props: CircularProgressProps) => {
    return <MaterialCircularProgress {...props} />;
};

export default CircularProgressBase;
