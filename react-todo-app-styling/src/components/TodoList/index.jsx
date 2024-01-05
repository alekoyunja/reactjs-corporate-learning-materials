import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "../";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
