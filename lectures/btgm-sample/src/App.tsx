import React, { useEffect } from "react";
import { Button } from "./components";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <section>
            <Button className="other-class" onClick={() => alert("clicked")}>
                Click me!
            </Button>
        </section>
    );
};

export default App;
