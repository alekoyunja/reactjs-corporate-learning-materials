import React, { useEffect } from "react";
import { Button, TSButton } from "./components";
import styles from "./App.module.css";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <section className={styles.App}>
            <img alt="" className={styles.logo} />
            <Button className="other-class" onClick={() => alert("clicked")}>
                Click me!
            </Button>
            <TSButton className="other-class" onClick={() => alert("clicked")}>
                Click me!
            </TSButton>
        </section>
    );
};

export default App;
