import React, { useEffect, memo } from "react";
import styles from "./App.module.css";
import { Button } from "./components";

const App = memo(() => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <section className={styles.App}>
            <Button className="other-class" onClick={() => console.log("clicked")}>
                Click me!
            </Button>
        </section>
    );
});

export default App;
