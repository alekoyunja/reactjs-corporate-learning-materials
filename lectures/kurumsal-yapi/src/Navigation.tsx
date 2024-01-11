import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticaionContext } from "./pages/Login/Data/AuthenticaionProvider";
import {Login, User} from "./pages/";

const Navigation = () => {
    const { state } = useContext(AuthenticaionContext);
    const { isAuthenticated } = state;

    const AuthRoutes = () => {
        return (
            <Route path="*" element={<User />} />
        );
    };

    const PublicRoutes = () => {
        return (
            <Route path="/" element={<Login />} />
        );
    };

    return (
        <Router>
            <Routes>
                {isAuthenticated ? AuthRoutes() : PublicRoutes()}
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </Router>
    );
};

export default Navigation;
