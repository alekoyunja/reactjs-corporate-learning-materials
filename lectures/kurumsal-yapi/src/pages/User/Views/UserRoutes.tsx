import React from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

const UserRoutes: React.FC = () => {
    const [response, loading, error] = useFetch("https://jsonplaceholder.typicode.com/users");
    console.log(response, loading, error);
    
    return (
        <Routes>
            <Route index element={<UserList users={response} />} />
            <Route path="/kullanici-ekle" element={<CreateUser />} />
            <Route path="/:id" element={<EditUser />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    );
};

export default UserRoutes;
