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
        <form id="login-form" className="d-flex flex-column text-start" onSubmit={onSubmit}>
            <div>
                <p>{error}</p>
            </div>
            <label className="form-label">Kullanıcı Adı</label>
            <input className="form-control" name="username" type="text" placeholder="Kullanıcı Adınız" />
            <label className="form-label">Şifre</label>
            <input className="form-control" name="password" type="password" placeholder="Şifreniz" />
            <button className="btn btn-primary mt-4" disabled={loading} type="submit">Giriş Yap</button>
        </form>
    );
};

export default LoginForm;