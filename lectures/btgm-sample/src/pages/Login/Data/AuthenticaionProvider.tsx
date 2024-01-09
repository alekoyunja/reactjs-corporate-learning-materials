import React, { createContext, useReducer } from "react";

type AuthenticaionState = {
    response: any;
    error: any;
    loading: boolean;
};

const initialState: AuthenticaionState = {
    response: null,
    error: null,
    loading: false,
};

const authenticaionReducer = (state: AuthenticaionState, action: any) => {
    switch (action.type) {
        case "LOGIN_BEGIN":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                response: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const AuthenticaionContext = createContext(null);

const AuthenticaionProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authenticaionReducer, initialState);

    const login = async (_username: string, _password: string) => {
        dispatch({ type: "LOGIN_BEGIN" });

        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    username: "kminchelle",
                    password: "0lelplR",
                    expiresInMins: 60,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: "LOGIN_SUCCESS", payload: data });
            } else {
                const error = await response.text();
                dispatch({ type: "LOGIN_FAILED", payload: error });
            }
        } catch (error) {
            dispatch({ type: "LOGIN_FAILED", payload: error.message });
        }
    };

    return (
        <AuthenticaionContext.Provider value={{ state, login }}>
            {children}
        </AuthenticaionContext.Provider>
    );
};

export { AuthenticaionContext, AuthenticaionProvider };
