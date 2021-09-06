// import ButtonBase from "../../components/Button/ButtonBase";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import AuthenticateProvider from "../../contexts/Authenticate/Login";
import ManageUser from "../Admin/ManageUser";
import AddPost from "../Admin/Posts/AddPost";
import ManagePost from "../Admin/Posts/ManagePost";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import UserProfile from "../Users/UserProfile";

export const App = () => {
    return (
        <AuthenticateProvider>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AddPost}>
                        {/* <Redirect to="/login" /> */}
                    </Route>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/user-profile" component={UserProfile}></Route>
                    <Route path="/user-manage" component={ManageUser}></Route>
                    <Route path="/post-manage" component={ManagePost}></Route>
                </Switch>
            </BrowserRouter>
        </AuthenticateProvider>
    );
};
