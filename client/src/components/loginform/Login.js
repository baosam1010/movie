import { Formik } from "formik"


function Login() {
    return (
        <Formik
            initialValues={{ name: '', password: '' }}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
            }}
        >
            {props => console.log(props)
                /* <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        name="name"
                    />
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    <button type="submit">Submit</button>
                </form> */
            
            
            }

        </Formik>
    )
}

export

    default Login
