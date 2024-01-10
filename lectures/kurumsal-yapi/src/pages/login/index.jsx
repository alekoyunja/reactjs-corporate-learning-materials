import React from "react";
import { LoginForm, Title } from "./View";
import logo from "../../assets/logo.jpeg";

const Login = () => {
    return (
        <div id="login" className="container">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <Title title="Giriş Yap" />
            <LoginForm />
        </div>
    );
}

export default Login;