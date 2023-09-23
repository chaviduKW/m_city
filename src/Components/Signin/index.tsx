import { useState } from "react";
import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { CircularProgress } from '@mui/material';
import { Redirect } from "react-router-dom";;

import { useFormik } from "formik";;
import * as Yup from 'yup';



const SignIn = (props:any) => {

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('incalid email address')
                .required('email is required'),
            password: Yup.string()
                .required('password is required')
        }),
        onSubmit: (values) => {
            setLoading(true)
            console.log(values)
            submitForm(values)
        }
    })

    const submitForm = (values:any) => {

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("successfully logged in");
                console.log(user);
                setLoading(false);
                props.history.push('/dashboard')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoading(false);
                console.log("failed login");
                alert(error);
            });
    }

    return (
        <div className="container">
            <div className="signin_wrapper" style={{ margin: '100px' }}>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Please login</h2>
                    <input
                        name="email"
                        placeholder="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />

                    {formik.touched.email && formik.errors.email ?
                        <div className="error_label">
                            {formik.errors.email}
                        </div> : null
                    }
                    <input
                        name="password"
                        placeholder="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />

                    {formik.touched.password && formik.errors.password ?
                        <div className="error_label">
                            {formik.errors.password}
                        </div> : null
                    }

                    {
                        loading ?
                            <CircularProgress color="secondary" className="progress" />
                            :
                            <button type="submit" >Login</button>
                    }



                </form>

            </div>
        </div>
    )
}

export default SignIn