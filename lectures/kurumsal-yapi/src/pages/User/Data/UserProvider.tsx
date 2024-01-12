import React, { createContext, useReducer } from "react";
import { getUsers, deleteUser, createUser, updateUser, getUser } from "./UserService";

type User = {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
};

type UserState = {
    users: User[];
    error: any;
    loading: boolean;
    user?: User;
};

const initialState: UserState = {
    users: [],
    error: null,
    loading: false,
    user: null,
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
        case "CREATE_BEGIN":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "CREATE_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
            };
        case "CREATE_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
            case "UPDATE_BEGIN":
                return {
                    ...state,
                    loading: true,
                    error: null,
                };
            case "UPDATE_SUCCESS":
                return {
                    ...state,
                    loading: false,
                    error: null,
                };
            case "UPDATE_FAILED":
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                };
                case "GET_BEGIN":
                    return {
                        ...state,
                        loading: true,
                        error: null,
                    };
                case "GET_SUCCESS":
                    return {
                        ...state,
                        user: action.payload as User,
                        loading: false,
                        error: null,
                    };
                case "GET_FAILED":
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

    const getUserById = async (id: number) => {
        dispatch({ type: "GET_BEGIN" });

        try {
            const user = await getUser(id);
            
            dispatch({ type: "GET_SUCCESS", payload: user });
        } catch (error) {
            dispatch({ type: "GET_FAILED", payload: error.message });
        }
    };

    const addUser = async (user: User) => {
        dispatch({ type: "CREATE_BEGIN" });

        try {
            await createUser(user);
            dispatch({ type: "CREATE_SUCCESS" });

        } catch (error) {
            dispatch({ type: "CREATE_FAILED", payload: error.message });
        }
    };

    const editUser = async (id: number, user: User) => {
        dispatch({ type: "UPDATE_BEGIN" });

        try {
            await updateUser(id, user);
            dispatch({ type: "UPDATE_SUCCESS" });

        } catch (error) {
            dispatch({ type: "UPDATE_FAILED", payload: error.message });
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
        <UserContext.Provider
            value={{ state, getAllUsers, removeUser, addUser, editUser, getUserById }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider, User };
