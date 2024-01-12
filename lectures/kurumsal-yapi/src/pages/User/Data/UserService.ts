type UserResponse = {
    users: [];
    total: number;
    limit: number;
};

type DeleteResponse = {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
};

type CreateUserResponse = {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
};

const getUsers = async () : Promise<UserResponse> => {
    const response = await fetch("https://dummyjson.com/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

const getUser = async (id: number) : Promise<CreateUserResponse> => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

const createUser = async (user: any) : Promise<CreateUserResponse> => {
    const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return await response.json();
};

const updateUser = async (id: number, user: any) : Promise<CreateUserResponse> => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return await response.json();
};

const deleteUser = async (id: number) : Promise<DeleteResponse> => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};

export {
    getUsers,
    deleteUser,
    createUser,
    updateUser,
    getUser
};
