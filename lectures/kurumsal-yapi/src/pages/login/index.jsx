import React from "react";
import LoginForm from "./LoginForm";
import Title from "./Title";
import logo from "../../assets/logo.jpeg";

const Login = () => {
    return (
        <section id="login" className="row">
            <div className="col-12">
                    <img src={logo} alt="Kurum Logo" />
                </div>
                <div className="col-12">
                    <Title title="Giriş Yap" />
                </div>
                <div className="col-12">
                    <LoginForm />
                </div>
        </section>
    );
};

export default Login;