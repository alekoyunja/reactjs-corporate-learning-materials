import React, { useEffect, useContext } from "react";
import UserList from "../Views/UserList";
import { UserContext, User } from "../Data/UserProvider";


const User: React.FC = () => {
    const { state, getAllUsers } = useContext(UserContext);
    const { users } = state;

    useEffect(() => {
        getAllUsers();
    }, []);
    
    return (
        <div>
            <h1>UserView</h1>
            {
                users && <UserList users={users} />
            }
        </div>
    );
};

export default User;