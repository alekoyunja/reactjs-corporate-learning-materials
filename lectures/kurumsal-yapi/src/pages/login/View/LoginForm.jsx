import React from "react";

const LoginForm = () => {

    const onSubmit = (e) => {
        // default davranışını kes
        // örn: eğer link olsaydı başka sayfaya gitmesini engellerdik
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const username = data.get("username");
        const password = data.get("password");
        console.log(username, password);
    }
    return (

        <form id="login-form"
            onSubmit={onSubmit}>
            <input
                type="text"
                id="username"
                name="username"
                className="input"
                placeholder="T.C. Kimlik Numarası" />
            <input
                type="password"
                id="password"
                className="input"
                name="password"
                placeholder="Şifre Giriniz!" />
            <button className="button" type="submit">Giriş Yap</button>
            <p className="forgot"> Şifremi Unuttum!</p>
        </form>
    )
};

export default LoginForm;