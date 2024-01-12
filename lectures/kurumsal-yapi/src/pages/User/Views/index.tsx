import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "../Views/UserList";
import CreateUser from "../Views/CreateUser";
import EditUser from "../Views/EditUser";
import { UserContext, User } from "../Data/UserProvider";

const User: React.FC = () => {
    const { state, getAllUsers } = useContext(UserContext);
    const { users } = state;

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <Routes>
            <Route index element={<UserList users={users} />} />
            <Route path="/kullanici-ekle" element={<CreateUser />} />
            <Route path="/:id" element={<EditUser />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    );
};

export default User;
