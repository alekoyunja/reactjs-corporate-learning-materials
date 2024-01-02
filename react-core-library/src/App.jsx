import React from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button";

const App = () => {
    return (
        <div>
            <h1>Core Library Element</h1>
            <Button title="Click Me" onClicked={() => alert("Hello World")} />
        </div>
    );
};

export default App;
