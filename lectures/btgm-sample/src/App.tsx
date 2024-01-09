import React, { useEffect } from "react";
import { Button } from "./components";
import Login from "./pages/Login";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <section>
            <Button className="other-class" onClick={() => alert("clicked")}>
                Click me!
            </Button>
            <Login />
        </section>
    );
};

export default App;
