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

        // fetch ile login işlemini yapacağız
        // fetch asenkron çalışır ve geriye bir promise nesnesi döner
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, password: password })
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
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