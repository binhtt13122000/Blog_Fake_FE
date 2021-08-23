import {
    LinearProgress as MaterialLinearProgress,
    LinearProgressProps as MaterialLinearProgressProps,
} from "@material-ui/core";

export interface LinearProgressProps extends MaterialLinearProgressProps {}

const LinearProgressBase = (props: LinearProgressProps) => {
    return <MaterialLinearProgress {...props} />;
};

export default LinearProgressBase;
