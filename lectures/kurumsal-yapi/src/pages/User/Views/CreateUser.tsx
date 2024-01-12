import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {User} from "../Data/UserProvider";

const CreateUser = () => {
    const validationSchema = Yup.object().shape(
        {
            firstName: Yup.string().required("Zorunlu alan"),
            lastName: Yup.string().required("Zorunlu alan"),
            age: Yup.number().required("Zorunlu alan").min(18, "18 yaşından küçük olamaz"),
        }
    );

    const formik = useFormik<User>({
        initialValues: {
            firstName: "",
            lastName: "",
            age: 18,
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
        },
    });

    console.log("errors", formik.errors);
    

    return (
        <section>
            <h2>Kişi Ekle</h2>
            <form onSubmit={formik.handleSubmit}>
            <label>İsminiz</label>
            <input onChange={formik.handleChange}
                value={formik.values.firstName} name="firstName" className="form-control" placeholder="İsminizi giriniz" />
            <label>Soyisim</label>
            <input onChange={formik.handleChange}
                value={formik.values.lastName} name="lastName" className="form-control" placeholder="Soyisminizi giriniz" />
                <label>Yaş</label>
            <input onChange={formik.handleChange}
                value={formik.values.age} type="number" name="age" className="form-control" placeholder="Yaşınızı giriniz" />
            <button type="submit" className="btn btn-success">kişi Oluştur</button>
        </form>
        </section>
    );
};

export default CreateUser;
