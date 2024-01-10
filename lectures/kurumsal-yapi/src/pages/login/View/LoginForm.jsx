import React from "react";

const LoginForm = () => {

    const onSubmit = (e) => {
        console.log(e);
    }
    return (

        <form id="login-form"
            onSubmit={onSubmit}>

            <input
                type="text"
                id="username"
                className="input"
                placeholder="T.C. Kimlik Numarası" />

            <input
                type="password"
                id="password"
                className="input"
                placeholder="Şifre Giriniz!" />

            <button className="button" type="submit">Giriş Yap</button>
            <p className="forgot"> Şifremi Unuttum!</p>
        </form>

    )
};

export default LoginForm;