import React from "react";
import styles from "./App.module.css";

const Title = () => <h1 className={styles.title}>Hello React</h1>;

const App = () => {
    return <Title />;
};

export default App;
