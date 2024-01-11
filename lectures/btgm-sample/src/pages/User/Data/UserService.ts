type UserResponse = {
    users: [];
    total: number;
    limit: number;
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

export {
    getUsers
};
