import React, { useEffect } from "react";
import styles from "./App.module.css";
import { Button } from "./components";
import logo from "./assets/logo192.png";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <section className={styles.App}>
            <div className="logo"></div>
            <img src={logo} alt="logo" />
            <Button
                className="other-class"
                onClick={() => console.log("clicked")}
            >
                Click me!
            </Button>
        </section>
    );
};

export default App;
