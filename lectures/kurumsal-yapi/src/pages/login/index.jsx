import React from "react";
import LoginForm from "./LoginForm";
import Title from "./Title";

const Login = () => {
    return (
        <section id="login">
            <Title title="Giriş Yap" />
            <LoginForm />
        </section>
    );
};

export default Login;