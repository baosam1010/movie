import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col, Container,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Movies(props) {
    const [film, setFilm] = useState(null);
    const { category } = props;

    useEffect(() => {
        const getFilms = async () => {
            try {
                const films = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2YqtYz9YMi9NAuYMHIwCapR7B2_P7xUoGVrSdvFovDeNG6Ekrs-fGaHV8.html`);
                let keys = films.data.phim;
                const { phimle, phimbo, phimchieurap, phimhoathinh } = films.data.phim;
                // console.log('keys:',keys)
                if (keys.hasOwnProperty(category)) {
                    //    console.log('obbb', keys[category])
                    setFilm(keys[category].slice(0, 12));
                } else {
                    let filmsArr = [...phimle, ...phimbo, ...phimhoathinh, ...phimchieurap];
                    let filmfilter = filmsArr.filter(item => {
                        return item.category = category;
                    })
                    setFilm(filmfilter.slice(0, 12));
                }

            } catch (error) {
                console.log(error)
            }

        };
        getFilms();
        return () => {
            setFilm(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    console.log('filmCategory', film)
    const showItem = (film) => {
        let html = null;
        console.log(html)
        if (film) {
            html = (
                <Container fluid className="">
                    <Row className=" g-4" >
                        {film.map((item, index) => {
                            const { url, imageUrl, title } = item;
                            let nameIndex = 0;
                            if (url.search('/p/')) {
                                nameIndex = url.indexOf('/p/') + 2;
                            } else if (url.search('/phim/')) {
                                nameIndex = url.indexOf('/phim/') + 5;
                            }
                            let nameMovie = url.substring(nameIndex);
                            return (
                                <Col key={url + index} sm={6} md={6} lg={4} xl={3} className="movie-item  position-relative d-flex flex-column justify-content-center">
                                    {/* <Ratio aspectRatio={3 / 4} > */}
                                        <Link to={nameMovie}>
                                            <img className="w-100 height-450px d-block rounded-top" src={imageUrl} alt={url} />
                                        </Link>
                                    {/* </Ratio> */}
                                    <Link to={nameMovie}
                                        className="w-100 d-block absolute bottom-0 overflow-hidden rounded-bottom px-2  bg-secondary bg-opacity-50 lineWord  d-block text-decoration-none text-yellow-400 fs-5 fw-bold  py-2 text-nowrap "
                                    >
                                        {title}
                                        
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>

                </Container>
            )
        }
        return html;
    }
    return (
        <div className="movies mt-5 mb-5 w-100">
            <div className="movie-category d-flex justify-content-between mb-3">
                <h1 className="mt-10">{category}</h1>
                <Link to={`/category/${category}`} type="button" className="movie-category_link px-2 py-1 fs-5 fw-normal text-decoration-none text-black hover:text-orange">Xem Tất Cả</Link>
            </div>
            {showItem(film)}
        </div>
    )
}




export default Movies;
