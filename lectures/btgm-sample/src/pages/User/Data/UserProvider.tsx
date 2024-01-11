import React, { createContext, useReducer } from "react";
import { getUsers, deleteUser } from "./UserService";

type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
};

type UserState = {
    users: User[];
    error: any;
    loading: boolean;
};

const initialState: UserState = {
    users: [],
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
                users: action.payload as User[],
                loading: false,
                error: null,
            };
        case "USERS_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
            case "DELETE_BEGIN":
                return {
                    ...state,
                    loading: true,
                    error: null,
                };
            case "DELETE_SUCCESS":
                return {
                    ...state,
                    users: action.payload as User[],
                    loading: false,
                    error: null,
                };
            case "DELETE_FAILED":
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
            const data = await getUsers();

            const users: User[] = data.users.map((user: User) => ({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
            }));
            dispatch({ type: "USERS_SUCCESS", payload: users });
        } catch (error) {
            dispatch({ type: "USERS_FAILED", payload: error.message });
        }
    };

    const removeUser = async (id: number) => {
        dispatch({ type: "DELETE_BEGIN" });

        try {
            await deleteUser(id);
        } catch (error) {
            dispatch({ type: "DELETE_FAILED", payload: error.message });
        }
    };

    return (
        <UserContext.Provider value={{ state, getAllUsers, removeUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider, User };
