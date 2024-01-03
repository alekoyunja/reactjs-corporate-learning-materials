import React, { useEffect } from "react";
import { Button } from "./components";
import styles from "./App.modules.css";
import logo from "./assets/logo192.png";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <section className={styles.App}>
            <p>asd</p>
        </section>
    );
};

export default App;
