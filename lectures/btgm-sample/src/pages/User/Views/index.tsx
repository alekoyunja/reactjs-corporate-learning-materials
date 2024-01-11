import React, { useEffect, useContext } from "react";
import { UserContext } from "../Data/UserProvider";


const User: React.FC = () => {
    const { state, getAllUsers } = useContext(UserContext);
    const { response } = state;

    useEffect(() => {
        getAllUsers();
    }, []);

    console.log(response);
    
    return (
        <div>
            <h1>UserView</h1>
        </div>
    );
};

export default User;