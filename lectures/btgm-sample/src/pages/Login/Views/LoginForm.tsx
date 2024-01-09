import React, {FormEvent, useContext} from "react";
import { AuthenticaionContext } from "../Data/AuthenticaionProvider";

const LoginForm = () => {
    const {state, login} = useContext(AuthenticaionContext);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        const data = new FormData(e.currentTarget);
        e.preventDefault();
        const username = data.get("username");
        const password = data.get("password");
        login(username, password);
    };

    console.log(state);

    return (
        <form id="login-form" onSubmit={onSubmit}>
            <label>Kullanıcı Adı</label>
            <input name="username" type="text" placeholder="Kullanıcı Adınız" />
            <label>Şifre</label>
            <input name="password" type="password" placeholder="Şifreniz" />
            <button type="submit">Giriş Yap</button>
        </form>
    );
};

export default LoginForm;