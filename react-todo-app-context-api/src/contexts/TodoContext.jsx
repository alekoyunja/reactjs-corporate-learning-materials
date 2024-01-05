import React, { createContext, useReducer, useEffect } from "react";

// Başlangıç state'i
const initialState = {
    todos: [],
    loading: false,
    error: null,
};

// Reducer fonksiyonu
const todoReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_TODO_BEGIN":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_TODO_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "FETCH_TODO_SUCCESS":
            return {
                ...state,
                todos: action.payload,
                loading: false,
            };
        case "ADD_TODO_BEGIN":
            return {
                ...state,
                loading: true,
            };
        case "ADD_TODO_SUCCESS":
            return {
                ...state,
                todos: [...state.todos, action.payload],
                loading: false,
            };
        case "UPDATE_TODO_BEGIN":
            return {
                ...state,
                loading: true,
            };
        case "UPDATE_TODO_SUCCESS":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? {
                              ...todo,
                              completed: !todo.completed,
                          }
                        : todo
                ),
                loading: false,
            };
        case "DELETE_TODO_BEGIN":
            return {
                ...state,
                loading: true,
            };
        case "DELETE_TODO_SUCCESS":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
                loading: false,
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

    useEffect(() => {
        dispatch({ type: "FETCH_TODO_BEGIN" });
        fetch("http://localhost:3000/todos")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "FETCH_TODO_SUCCESS", payload: data });
            });
    }, []);

    const addTodo = (title) => {
        dispatch({ type: "ADD_TODO_BEGIN" });
        fetch("http://localhost:3000/todos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: title, completed: false }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                dispatch({ type: "ADD_TODO_SUCCESS", payload: data });
            });
    };

    const deleteTodo = (id) => {
        dispatch({ type: "DELETE_TODO_BEGIN" });
        fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
        }).then(() => {
            dispatch({ type: "DELETE_TODO_SUCCESS", payload: id });
        });
    };

    const updateTodo = (todo) => {
        dispatch({ type: "UPDATE_TODO_BEGIN" });
        fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...todo, completed: !todo.completed }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                dispatch({ type: "UPDATE_TODO_SUCCESS", payload: data });
            });
    };

    return (
        <TodoContext.Provider
            value={{ state, dispatch, deleteTodo, addTodo, updateTodo }}
        >
            {children}
        </TodoContext.Provider>
    );
};

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
