// import ButtonBase from "../../components/Button/ButtonBase";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AuthenticateProvider from "../../contexts/Authenticate/Login";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

export const App = () => {
    return (
        <AuthenticateProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        </AuthenticateProvider>
    );
};
