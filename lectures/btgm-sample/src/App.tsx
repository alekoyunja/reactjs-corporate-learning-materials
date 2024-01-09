import React, { useEffect } from "react";
import { Button } from "./components";
import Login from "./pages/Login";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <main id="main">
            <Login />
        </main>
    );
};

export default App;
