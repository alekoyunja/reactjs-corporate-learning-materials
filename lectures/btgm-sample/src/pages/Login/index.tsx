import React from "react";
import LoginForm from "./LoginForm";
import Title from "./Title";

const Login = () => {
    return (
        <section id="login">
            <img src={require("../../assets/logo192.png")} alt="Kurum Logo" />
            <Title title="Giriş Yap" />
            <LoginForm />
        </section>
    );
};

export default Login;