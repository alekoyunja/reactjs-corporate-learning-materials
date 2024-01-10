import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticaionContext } from "./pages/Login/Data/AuthenticaionProvider";
import Login from "./pages/Login";

const Navigation = () => {
    const { state } = useContext(AuthenticaionContext);
    const { isAuthenticated } = state;

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
                <Route path="/dashboard" element={<p>dashboard</p>} />
                <Route path="*" element={<p>sayfa bulunamadı</p>} />
            </Routes>
        </Router>
    );
};

export default Navigation;
