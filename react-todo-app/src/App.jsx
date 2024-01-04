import React, { useEffect } from "react";
import TodoApp from "./TodoApp";
import styles from "./App.modules.css";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <section className={styles.App}>
            <TodoApp />
        </section>
    );
};

export default App;
