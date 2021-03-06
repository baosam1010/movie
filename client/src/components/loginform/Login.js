import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import *as Yup from 'yup';
import './css/login.css'

function Login() {
    const validateLogin = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required'),
        password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Password is required'),
    })
    return (
        <Formik
            initialValues={{ name: '', password: '' }}
            validationSchema={validateLogin}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
            }}
        >
            {props => (
                <div className="loginform">
                    <Form onSubmit={props.handleSubmit}>
                        <h1>Login Form </h1>
                        <label htmlFor="name" className="fs-3 fw-bold text-white pb-1">Name:</label>
                        <Field
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                            id="name"
                        />
                        {props.errors.name && <div id="errorname" className="pb-1 ">{props.errors.name}</div>}

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

                        <div>
                            <button type="submit">Login</button>
                            <Link to='/register'>Register</Link>
                        </div>
                    </Form>
                </div>
            )


            }

        </Formik>
    )
}

export default Login;
