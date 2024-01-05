import React, { useEffect } from "react";
import TodoApp from "./TodoApp";

const App = () => {
    useEffect(() => {
        console.log("app component mounted");
    });

    return (
        <TodoApp />
    );
};

export default App;
