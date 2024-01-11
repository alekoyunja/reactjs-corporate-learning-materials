import React from "react";
import { User } from "../Data/UserProvider";

type UserListProps = {
    users: User[];
};

const UserList = ({ users }: UserListProps) => {
    return (
        <div>
            <h1>UserList</h1>
            <table>
                <tbody>
                    {users.map((user: User) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td><button type="button">Kullanıcı Sil</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
