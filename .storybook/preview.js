import { muiTheme } from "storybook-addon-material-ui";

import replyTheme from "../src/theme/replyTheme";

export const decorators = [muiTheme([replyTheme])];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
