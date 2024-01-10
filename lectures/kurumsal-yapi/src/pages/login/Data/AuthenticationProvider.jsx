import React, {createContext, useReducer} from "react";

// Context API
const AuthenticationContext = createContext(null);

// useReducer
const initialValues = { 
    isAuth: false,
    response: null,
    error: null,
    loading: false
 };

const authenticationReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_BEGIN":
            return {
                ...state,
                loading: true,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuth: true,
                response: action.payload,
            };
            case "LOGIN_FAILED":
                return {
                    ...state,
                    error: action.payload,
                };
        default:
            return state;
    }
};

const AuthenticationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authenticationReducer, initialValues);

    const login = (username, password) => {
        dispatch({ type: "LOGIN_BEGIN" });

        // fetch ile login işlemini yapacağız
        // fetch asenkron çalışır ve geriye bir promise nesnesi döner
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, password: password })
        })
        .then(response => {
            if(response.ok)
                return response.json();
            else throw new Error("Login işlemi başarısız oldu!");
        })
        .then(data => {
            dispatch({ type: "LOGIN_SUCCESS", payload: data });
        })
        .catch(error => {
            dispatch({ type: "LOGIN_FAILED", payload: error });
            console.error(error);
        });
    }

    return (
        <AuthenticationContext.Provider value={{ state, login }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};