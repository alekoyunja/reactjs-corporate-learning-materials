import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoItem } from "../";

const TodoList = () => {
    const { state } = useContext(TodoContext);
    const { todos, loading } = state;

    if (loading) return <p>Loading...</p>;
    else
        return (
            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoItem key={todo.id + todo.title} todo={todo} />
                ))}
            </ul>
        );
};

export default TodoList;
