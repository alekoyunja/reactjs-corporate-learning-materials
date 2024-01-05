import React, { createContext, useReducer } from "react";

// Başlangıç state'i
const initialState = {
    todos: [],
};

// Reducer fonksiyonu
const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { title: action.payload, completed: false },
                ],
            };
        // Diğer case'ler (UPDATE_TODO, DELETE_TODO vb.) eklenecek
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.title === action.payload ? {
                        ...todo,
                        completed: !todo.completed
                    } : todo
                ),
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.title !== action.payload),
            };
        default:
            return state;
    }
};

// Context oluşturma
export const TodoContext = createContext();

// Provider component'i
import PropTypes from "prop-types";

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
