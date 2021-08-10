import { createTheme, ThemeOptions } from "@material-ui/core";
import createBreakpoint from "@material-ui/core/styles/createBreakpoints";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const common = {
    white: "#fff",
    black: "#000",
};

const palette: PaletteOptions = {
    primary: {
        main: "#344955",
        light: "#4A6572",
        dark: "#232F34",
        contrastText: common.white,
    },
    secondary: {
        main: "#F9AA33",
        contrastText: common.black,
    },
    info: {
        main: "#2196F3",
        light: "#64B6F7",
        dark: "#0B79D0",
        contrastText: common.white,
    },
    error: {
        main: "#F44336",
        light: "#F88078",
        dark: "#E31B0C",
        contrastText: common.white,
    },
    warning: {
        main: "#FF9800",
        light: "#FFB547",
        dark: "#C77700",
        contrastText: "#212121",
    },
    success: {
        main: "#4CAF50",
        light: "#7BC67E",
        dark: "#3B873E",
        contrastText: common.white,
    },
    text: {
        primary: "#212121",
        secondary: "#757575",
        disabled: "#9E9E9E",
    },
    divider: "#E0E0E0",
    action: {
        hover: "#F5F5F5",
        selected: "#EBEBEB",
        disabledBackground: "#E0E0E0",
        disabled: "#BDBDBD",
    },

    background: {
        default: common.white,
    },
    contrastThreshold: 500,
};

const breakpoints = createBreakpoint({
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1440,
        xl: 1920,
    },
});

const themeObject: Readonly<ThemeOptions> = {
    palette,
    breakpoints,
    typography: {
        fontSize: 16,
        fontFamily: "Work Sans, sans-serif",
        h1: {
            fontSize: "6rem",
            fontWeight: 300,
            fontStyle: "normal",
            letterSpacing: "-1.5px",
            textTransform: "none",
        },
        h2: {
            fontSize: "3.75rem",
            fontWeight: 600,
            fontStyle: "normal",
            letterSpacing: "-0.5px",
            textTransform: "none",
        },
        h3: {
            fontSize: "3rem",
            fontWeight: 400,
            fontStyle: "normal",
            letterSpacing: "0px",
            textTransform: "none",
        },
        h4: {
            fontSize: "2.125rem",
            fontWeight: 400,
            fontStyle: "normal",
            letterSpacing: "0.25px",
            textTransform: "none",
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: 700,
            fontStyle: "normal",
            letterSpacing: "0px",
            textTransform: "none",
        },
        h6: {
            fontSize: "1.25rem",
            fontWeight: 500,
            fontStyle: "normal",
            letterSpacing: "0.15px",
            textTransform: "none",
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 400,
            fontStyle: "normal",
            letterSpacing: "0.15px",
            textTransform: "none",
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            fontStyle: "normal",
            letterSpacing: "0.1px",
            textTransform: "none",
        },
        body1: {
            fontSize: "1.125rem",
            fontWeight: 400,
            fontStyle: "normal",
            letterSpacing: "0.5px",
            textTransform: "none",
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.25px",
            textTransform: "none",
        },
        button: {
            fontSize: "0.875rem",
            fontWeight: 500,
            fontStyle: "normal",
            letterSpacing: "1.25px",
            textTransform: "capitalize",
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 400,
            fontStyle: "normal",
            letterSpacing: "0.4px",
            textTransform: "none",
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 600,
            fontStyle: "normal",
            letterSpacing: "1.5px",
            textTransform: "capitalize",
        },
    },
};

const replyTheme = createTheme(themeObject);
export default replyTheme;
