import React from "react";
import LoginForm from "./LoginForm";
import logo from "../../assets/logo.jpeg";

const Login = () => {
    return (
        <div id="login" className="container">
            <div>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <LoginForm/>
        </div>
    );
}

export default Login;