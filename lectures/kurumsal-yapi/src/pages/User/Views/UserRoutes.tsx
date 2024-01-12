import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import { UserContext } from "../Data/UserProvider";

const UserRoutes: React.FC = () => {
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

export default UserRoutes;
