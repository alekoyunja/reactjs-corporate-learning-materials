import React from "react";

const LoginForm = () => {
    const onSubmit = (e) => {
        console.log(e);
    }

    return (
        <form id="login-form" onSubmit={onSubmit}>
            <label>Kullanıcı Adı</label>
            <input type="text" placeholder="Kullanıcı Adınız" />
            <label>Şifre</label>
            <input type="password" placeholder="Şifreniz" />
        </form>
    );
};

export default LoginForm;