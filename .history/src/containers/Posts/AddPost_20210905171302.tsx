import React from "react";

import MarkdownIt from "markdown-it";
import { useForm } from "react-hook-form";
import MdEditor from "react-markdown-editor-lite";

import ActionItem from "../../components/ActionItem/index";
import CategoryList from "../../components/CategoryList/index";
import DashBoardMain from "../../components/DashBoardMain";
import TextFieldRhf from "../../components/TextField/TextFieldRhf/index";
import { Box, Button, Card, CardContent, CardHeader, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";

import "react-markdown-editor-lite/lib/index.css";

const heightNavBar = 60;
const drawerWidth = 240;
const spacing = 30;
export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: heightNavBar,
        marginLeft: drawerWidth + spacing,
        marginRight: spacing,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0,
            width: "100%",
            alignItems: "center",
        },
    },
    hero: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            width: "100%",
        },
    },
    postMain: {
        width: "68%",
        padding: theme.spacing(2),
        borderRadius: "10px",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            maxWidth: "100%",
            borderRadius: "0",
        },
    },
    postTags: {
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        rowGap: 16,
        [theme.breakpoints.down("md")]: {
            width: "100%",
            maxWidth: "100%",
            flexDirection: "row",
            alignItems: "stretch",
            marginTop: theme.spacing(2),
            columnGap: theme.spacing(2),
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    postTag: {
        width: "100%",
        minHeight: 150,
        maxHeight: 370,
        overflowY: "auto",
    },
    postTagTitle: {
        borderBottom: "1px solid #818ea3 ",
    },
    postTagItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        columnGap: 4,
    },
    postTitle: {
        fontWeight: 500,
        fontSize: "26px",
    },
    subTitle: {
        fontWeigh: 400,
        color: "#818ea3",
        letterSpacing: "2px",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    avatar: {
        backgroundColor: "red",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
    },
    textField: {
        width: "85%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            maxWidth: "100%",
        },
    },
    button: {
        margin: theme.spacing(2),
    },
    formTop: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    visibily: {
        color: "#17c671",
    },
    private: {
        color: "#ffb400",
    },
}));
// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);
const categories = [
    "Uncategorized",
    "Design",
    "Development",
    "Writing",
    "Books",
    "Writing",
    "Books",
];
const AddPost: React.FC = () => {
    const [visibility, setVisibility] = React.useState(true);
    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm();
    const classes = useStyles();
    const submitHandler = () => {
        clearErrors();
    };
    const { ref: titleRef, ...titleProps } = register("title", {
        required: "Title không được để trống",
    });
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <>
            <DashBoardMain />
            <Box className={classes.root}>
                <Box padding={2} width={1}>
                    <Typography className={classes.subTitle} component="span" variant="subtitle1">
                        Blog Posts
                    </Typography>
                    <Typography className={classes.postTitle} component="h3">
                        Add New Post
                    </Typography>
                </Box>
                <Box className={classes.hero}>
                    <Card className={classes.postMain}>
                        <form
                            className={classes.form}
                            autoComplete="off"
                            noValidate
                            onSubmit={handleSubmit(submitHandler)}
                        >
                            <Box className={classes.formTop}>
                                <TextFieldRhf
                                    variant="outlined"
                                    margin="normal"
                                    className={classes.textField}
                                    required
                                    id="title"
                                    label="Your Post Title"
                                    inputRef={titleRef}
                                    errorMessage={errors["title"] && errors["title"].message}
                                    autoFocus
                                    {...titleProps}
                                />
                                <Hidden smDown>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        className={classes.button}
                                    >
                                        Publish
                                    </Button>
                                </Hidden>
                            </Box>
                            <MdEditor
                                style={{ height: "440px", width: "100%" }}
                                renderHTML={(text) => mdParser.render(text)}
                                canView={{
                                    menu: true,
                                    md: true,
                                    html: true,
                                    both: true,
                                    fullScreen: false,
                                    hideMenu: false,
                                }}
                                view={{
                                    menu: true,
                                    md: true,
                                    html: false,
                                }}
                            />
                            <Hidden mdUp>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Publish
                                </Button>
                            </Hidden>
                        </form>
                    </Card>
                    <Box className={classes.postTags}>
                        <Card className={classes.postTag}>
                            <CardHeader title="Actions" className={classes.postTagTitle} />
                            <CardContent>
                                <ActionItem
                                    icon={<VisibilityIcon />}
                                    textAction="Change"
                                    textStatus="Visibility:"
                                    action={() => {
                                        setVisibility((prev) => !prev);
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        component="p"
                                        className={visibility ? classes.visibily : classes.private}
                                    >
                                        {visibility ? "Public" : "Private"}
                                    </Typography>
                                </ActionItem>
                            </CardContent>
                        </Card>
                        <Card className={classes.postTag}>
                            <CardHeader title="Categories" className={classes.postTagTitle} />
                            <CardContent>
                                <CategoryList
                                    categories={categories}
                                    handleToggle={handleToggle}
                                    checked={checked}
                                />
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AddPost;
