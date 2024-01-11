import React from "react";
import LoginForm from "./LoginForm";
import Title from "./Title";

const Login = () => {
    return (
        <section id="login" className="row text-center card p-4 mt-4">
            <div className="col-12">
                <img
                    className="img-fluid"
                    width={200}
                    src={require("../../../assets/logo192.png")}
                    alt="Kurum Logo"
                />
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
