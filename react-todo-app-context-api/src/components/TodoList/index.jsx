import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoItem } from "../";

const TodoList = () => {
    const { state } = useContext(TodoContext);
    const todos = state.todos;

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.title}
                    todo={todo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
