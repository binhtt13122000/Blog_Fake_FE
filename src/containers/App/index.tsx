// import ButtonBase from "../../components/Button/ButtonBase";
import AuthenticateProvider from "../../contexts/Authenticate/Login";
import Login from "../Login";

export const App = () => {
    return (
        <AuthenticateProvider>
            <Login />
        </AuthenticateProvider>
    );
};
