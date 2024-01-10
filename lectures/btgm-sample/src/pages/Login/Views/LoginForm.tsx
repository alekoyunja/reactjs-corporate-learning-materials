import React, { FormEvent, useContext } from "react";
import { AuthenticaionContext } from "../Data/AuthenticaionProvider";

const LoginForm = () => {
    const { state, login } = useContext(AuthenticaionContext);
    const { loading, error } = state;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        const data = new FormData(e.currentTarget);
        e.preventDefault();
        const username = data.get("username");
        const password = data.get("password");
        login(username, password);
    };

    return (
        <form id="login-form" onSubmit={onSubmit}>
            <div>
                <p>{error}</p>
            </div>
            <label>Kullanıcı Adı</label>
            <input name="username" type="text" placeholder="Kullanıcı Adınız" />
            <label>Şifre</label>
            <input name="password" type="password" placeholder="Şifreniz" />
            <button disabled={loading} type="submit">Giriş Yap</button>
        </form>
    );
};

export default LoginForm;