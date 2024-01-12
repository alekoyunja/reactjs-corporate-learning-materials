import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import { User, UserContext } from "../Data/UserProvider";

const EditUser = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { id } = params as { id: string };
    const { getUserById, editUser, state } = useContext(UserContext);
    const { user } = state;
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Zorunlu alan"),
        lastName: Yup.string().required("Zorunlu alan"),
        age: Yup.number()
            .required("Zorunlu alan")
            .min(18, "18 yaşından küçük olamaz"),
    });

    const formik = useFormik<User>({
        initialValues: {
            firstName: user ? user.firstName : "",
            lastName: user ? user.lastName : "",
            age: user ? user.age : 0,
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
            editUser(id, values);
            navigate("/");
        },
    });

    useEffect(() => {
        getUserById(parseInt(id));
    }, [id]);

    return (
        <section className="card mt-4 p-4">
            <h2>Kişi Ekle</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>İsminiz</label>
                <input
                    onChange={formik.handleChange}
                    defaultValue={formik.values.firstName}
                    name="firstName"
                    className="form-control"
                    placeholder="İsminizi giriniz"
                />
                <label>Soyisim</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    name="lastName"
                    className="form-control"
                    placeholder="Soyisminizi giriniz"
                />
                <label>Yaş</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="Yaşınızı giriniz"
                />
                <button type="submit" className="btn btn-success mt-4">
                    kişi Oluştur
                </button>
            </form>
        </section>
    );
};

export default EditUser;
