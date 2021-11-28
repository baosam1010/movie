import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    Link,
    // useNavigate,
    useParams
} from 'react-router-dom';
import LoadingItem from '../../components/loadingItem/LoadingItem';
import './css/moviepage.css';
import { Formik, Form, Field } from 'formik';
import { addPost } from '../../actions/Posts';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
// import Comment from './Comment';


function MoviePage(props) {
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(false);

    let params = useParams();
    // const [text, setText] = useState({ name: '', email: '', textarea: '' });
    const [confirm, setConirm] = useState(false);
    const {posts, onAddPost} = props;
  
    console.log('props:', props);
    // console.log(posts);

    useEffect(() => {
        const getFilm = async () => {
            setLoading(true)
            try {
                const films = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2YqtYz9YMi9NAuYMHIwCapR7B2_P7xUoGVrSdvFovDeNG6Ekrs-fGaHV8.html`);
                const { phimle, phimbo, phimchieurap, phimhoathinh } = films.data.phim;
                let filmsArr = [...phimle, ...phimbo, ...phimhoathinh, ...phimchieurap];
                let filmfilter = filmsArr.filter(item => {
                    return item.url.includes(params.slug);
                });
                if (filmfilter) {
                    setFilm(...filmfilter)
                    // console.log('filmfilter', filmfilter);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getFilm();
        return () => {
            setFilm(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    // console.log('film', film)
    const showMovie = (film) => {
        let html = null;
        if (film) {
            const { title, episode } = film;
            const { type: Type, url: urlMovie } = episode[0];
            html = (
                <div className="my-10 ">
                    <Type
                        src={urlMovie}
                        width="100%"
                        height="600"
                        className="rounded"
                    >
                    </Type>
                    <div className="rounded">
                        <ul>
                            <li><Link to="/" className="fs-3 fw-bold text-decoration-none ">Home</Link></li>
                            <li><Link to="/" className="fs-3 fw-bold text-decoration-none ">{title}</Link></li>
                        </ul>
                        <p className="movie-name mt-10 fs-3 fw-bold ">{title}</p>
                    </div>
                </div>
            )
        }
        return html;
    };

    const ValidateSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        textarea: Yup.string()
            .min(2, 'Too Short!')
            .max(50, ' Too Long Please !')
            .required('Content is required'),
    });

    useEffect(() => {
        // console.log("change_textarea",text.textarea)
       if(confirm){
           setConirm(false)
       }
        return () => {
           
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts])

    const showPosts = posts => {
        let html = null;
        if (posts) {
            html = posts.map((item, index) => {
                return (
                    <li
                        className="d-flex  align-items-center text-center mb-3"
                        key={index}
                    >
                        <img className="me-2 d-block" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt={item.name} />
                        <p className="d-block fw-bold fs-3 me-4 text-yellow">{item.name}:</p>
                        <p className="fs-4 d-block ">{item.textarea}</p>
                    </li>
                )
            })
        }
        return html;

    };

    return (
        <>
            <div className="moviepage ">
                <div className="moviepage-wrapper ">
                    {showMovie(film)}
                </div>

                {/* <Comment  text={text} setText={setText} /> */}
                <div className={classNames(posts.length > 0 ? "d-block" : "d-none", "moviepage-post rounded ")}>
                    <ul className="bg-white p-4 rounded">
                        {showPosts(posts)}
                    </ul>
                </div>

                <Formik
                    initialValues={{ name: '', email: '', textarea: '' }}
                    validationSchema={ValidateSchema}
                    onSubmit={(values, actions) => {
                        onAddPost(values)
                        // setText({ ...text, ...values })
                        setConirm(!confirm)
                    }
                    }
                // className="w-100 p4 bg-black bg-opacity-75"
                >
                    {/* {formik=> console.log({formik})} */}
                    {props => (
                        <Form onSubmit={props.handleSubmit} className="d-flex flex-column p-4 bg-black bg-opacity-75 rounded">
                            <Container className=" gy-2 mb-4" >
                                <Row lg={12} className="mx-n15">
                                    <Col lg={6} className=" d-flex flex-column">
                                        <Field
                                            type="text"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.name}
                                            placeholder="Nhập tên của bạn"
                                            name="name"
                                            className="  py-1 fs-3 "
                                        />
                                        {props.errors.name && <div id="feedbackname" className="w-100 fs-5 fst-italic text-white fw-bold mt-1">{props.errors.name}</div>}
                                        {/* <ErrorMessage name="name" className="w-100 fs-5 fw-italic text-danger" /> */}
                                    </Col>
                                    <Col lg={6} className=" d-flex flex-column">
                                        <Field
                                            type="email"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.email}
                                            placeholder="Nhập Email của bạn"
                                            name="email"
                                            className="w-100 py-1 fs-3 "

                                        />
                                        {props.errors.email && <div id="feedbackemail" className="w-100 fs-5 fst-italic text-white fw-bold mt-1" >{props.errors.email}</div>}
                                        {/* <ErrorMessage name="email" className="w-100" /> */}
                                    </Col>
                                </Row>
                            </Container>
                            <Field
                                as="textarea"
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.textarea}
                                name="textarea"
                                className="w-100 px-2 py-1 fs-3"
                                style={{ height: '120px' }}
                            />
                            {props.errors.textarea && <div id="feedbacktextarea" className="w-100 fs-5 fst-italic text-white fw-bold mt-1">{props.errors.textarea}</div>}
                            {/* <ErrorMessage name="textarea" /> */}
                            <button type="submit" className=" mt-3 px-2 py-1 bg-primary text-white">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
            {loading ? <LoadingItem /> : null}
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: post => {
            dispatch(addPost(post))
        }
    }
};
const mapStateToProps = (state) => {
    return {
        posts: state.PostReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
