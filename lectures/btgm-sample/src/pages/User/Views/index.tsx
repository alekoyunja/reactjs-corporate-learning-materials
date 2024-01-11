import React, { useEffect, useContext } from "react";
import { UserContext, User } from "../Data/UserProvider";


const User: React.FC = () => {
    const { state, getAllUsers } = useContext(UserContext);
    const { users } = state;

    useEffect(() => {
        getAllUsers();
    }, []);

    console.log(users);
    
    return (
        <div>
            <h1>UserView</h1>
            {
                users && users.map((user: User) => (
                    <p>{user.firstName}</p>
                ))
            }
        </div>
    );
};

export default User;