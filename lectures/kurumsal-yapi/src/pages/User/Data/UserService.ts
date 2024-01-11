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

const getUsers = async () : Promise<UserResponse> => {
    const response = await fetch("https://dummyjson.com/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
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
    deleteUser
};
