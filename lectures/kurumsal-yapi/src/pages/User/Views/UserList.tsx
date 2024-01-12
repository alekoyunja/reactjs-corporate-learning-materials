import React, { useContext } from "react";
import { UserContext, User } from "../Data/UserProvider";
import { useNavigate  } from "react-router-dom";

type UserListProps = {
    users: User[];
};

const UserList = ({ users }: UserListProps) => {
    const { removeUser, editUser } = useContext(UserContext);
    const navigate = useNavigate ();

    return (
        <section className="container">
            <div className="row">
                <div className="col-12 p-4">
                    <div className="row">
                        <div className="col-6">
                            <h1>Kullanıcı Listesi</h1>
                        </div>
                        <div className="col-6 text-end">
                            <button className="btn btn-success" onClick={() => navigate("/kullanici-ekle")}>Ekle</button>
                        </div>
                    </div>
                    <table className="table">
                        <tbody>
                            {users.map((user: User) => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td className="text-end">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => navigate("/" + user.id, { state: { user } })}
                                            type="button"
                                        >
                                            Kullanıcı Düzenle
                                        </button>
                                    </td>
                                    <td className="text-end">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeUser(user.id)}
                                            type="button"
                                        >
                                            Kullanıcı Sil
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default UserList;
