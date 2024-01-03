import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "../";
import styles from "./TodoList.modules.css";

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul className={styles.TodoList}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
