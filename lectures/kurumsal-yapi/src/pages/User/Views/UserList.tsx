import React, {useContext} from "react";
import { UserContext, User } from "../Data/UserProvider";

type UserListProps = {
    users: User[];
};

const UserList = ({ users }: UserListProps) => {
    const { removeUser } = useContext(UserContext);

    return (
        <div>
            <h1>UserList</h1>
            <table>
                <tbody>
                    {users.map((user: User) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td><button onClick={() => removeUser(user.id)} type="button">Kullanıcı Sil</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
