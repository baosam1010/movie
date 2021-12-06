

import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import *as Yup from 'yup';
import './css/register.css'

function Register() {
    const validateLogin = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Password is required'),
        confirmpassword: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .oneOf([Yup.ref('password'), null], 'Passwords does not match')
    })
    return (
        <Formik
            initialValues={{ name: '', password: '', confirmpassword: '' }}
            validationSchema={validateLogin}
            onSubmit={(values, actions) => {
                console.log(values);
               
                actions.resetForm();
            }}
        >
            {props => (
                <div className="loginform">
                    <Form onSubmit={props.handleSubmit}>
                        <h1>Register Form </h1>

                        <label htmlFor="name" className="fs-3 fw-bold text-white pb-1">Name:</label>
                        <Field
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                        />
                        {props.errors.name && <div id="errorname">{props.errors.name}</div>}

                        <label htmlFor="password" className="fs-3 fw-bold text-white pb-1">Password:</label>
                        <Field
                            type="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            name="password"
                            id="password"
                        />
                        {props.errors.password && <div id="errorpassword">{props.errors.password}</div>}

                        <label  className="fs-3 fw-bold text-white pb-1">Confirm Password:</label>
                        <Field
                            type="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.confirmpassword}
                            name="confirmpassword"
                            id="confirmpassword"
                        />
                        {props.errors.confirmpassword && <div id="confirmpassword">{props.errors.confirmpassword}</div>}
                        
                        <div>
                            <button type="submit">Register</button>
                            <Link to='/login'>Login</Link>
                        </div>

                    </Form>
                </div>
            )


            }

        </Formik>
    )
}

export default Register;

