import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Dashboard</h1>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;