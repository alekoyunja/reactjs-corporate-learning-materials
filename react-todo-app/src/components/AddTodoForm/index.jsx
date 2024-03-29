import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AddTodoForm.modules.css";

const AddTodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <form className={styles.AddTodoForm} onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

AddTodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
