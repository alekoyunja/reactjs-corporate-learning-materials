import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import { AuthenticationContext } from "./pages/login/Data/AuthenticationProvider";

const Navigation = () => {
    const { state } = useContext(AuthenticationContext);
    const { isAuth } = state;

    console.log(isAuth);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuth ? <p>dashboard</p> : <Login />} />
                <Route path="*" element={<h1 style={{color: "red"}}>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;