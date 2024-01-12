import React from "react";
import { UserProvider } from "../Data/UserProvider";
import UserRoutes from "./UserRoutes";

const UserModule: React.FC = () => {
    return (
        <UserProvider>
            <UserRoutes />
        </UserProvider>
    );
};

export default UserModule;