import React, {FormEvent} from "react";

const LoginForm = () => {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(e);
    }

    return (
        <form id="login-form" onSubmit={onSubmit}>
            <label>Kullanıcı Adı</label>
            <input type="text" placeholder="Kullanıcı Adınız" />
            <label>Şifre</label>
            <input type="password" placeholder="Şifreniz" />
            <button type="submit">Giriş Yap</button>
        </form>
    );
};

export default LoginForm;