import React, { createContext, useReducer } from "react";

type User = {
    firstName: string;
    lastName: string;
    age: number;
}

type UserState = {
    response: User[];
    error: any;
    loading: boolean;
};

const initialState: UserState = {
    response: null,
    error: null,
    loading: false,
};

const userReducer = (state: UserState, action: any) => {
    switch (action.type) {
        case "USERS_BEGIN":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "USERS_SUCCESS":
            return {
                ...state,
                response: action.payload as User[],
                loading: false,
                error: null
            };
        case "USERS_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const UserContext = createContext(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const getAllUsers = async () => {
        dispatch({ type: "USERS_BEGIN" });

        try {
            const response = await fetch("https://dummyjson.com/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                console.log(response);
                
                const data = await response.json();
                dispatch({ type: "USERS_SUCCESS", payload: data });
            } else {
                const error = await response.text();
                dispatch({ type: "USERS_FAILED", payload: error });
            }
        } catch (error) {
            dispatch({ type: "USERS_FAILED", payload: error.message });
        }
    };

    return (
        <UserContext.Provider value={{ state, getAllUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
