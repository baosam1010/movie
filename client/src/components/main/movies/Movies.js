import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/movies.css';

function Movies(props) {
    const [film, setFilm] = useState(null);
    const { category, setLoading } = props;
    const [newName,] = useState({ phimbo: "Phim Bộ", phimchieurap: "Phim chiếu rạp", phimhoathinh: "Phim hoạt hình", phimle: "Phim lẻ" })
    
    useEffect(() => {
        const getFilms = async () => {
            setLoading(true);
            try {
                const films = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2YqtYz9YMi9NAuYMHIwCapR7B2_P7xUoGVrSdvFovDeNG6Ekrs-fGaHV8.html`);
                if(films){
                    setLoading(false)
                }
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
            setFilm(null);
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    // console.log('filmCategory', film)
    const showItem = (film) => {
        let html = null;
        // console.log(html)
        if (film) {
            html = (
                <Container fluid className="movies-item-wrapper">
                    <Row className="movies-item-wrapper-row g-4" >
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
                                <Col key={url + index} xs={6} sm={6} md={6} lg={4} xl={3} className="movies-item-wrapper-row-column position-relative d-flex flex-column justify-content-center">
                                    {/* <Ratio aspectRatio={3 / 4} > */}
                                    <Link to={nameMovie} className="w-100 d-block overflow-hidden">
                                        <img style={{ height: '240px' }} className="w-100 d-block rounded-top" src={imageUrl} alt={url} />
                                    </Link>
                                    {/* </Ratio> */}
                                    <Link to={nameMovie}
                                        className="w-100 d-block absolute bottom-0  rounded-bottom px-2  bg-dark bg-opacity-75 lineWord  d-block text-decoration-none  fs-5 fw-bold  py-2 text-nowrap text-truncate"
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
    };


    return (
        <div className="movies mt-5 mb-5 w-100">
            <div className="movies_category bg-warning d-flex justify-content-between align-items-center p-3">
                <h1 className="mt-10 ">{category === "Phim tình cảm" || category === "Phim hành động" ? category : newName[category]}</h1>
                <Link to={`/category/${category}`} type="button" className="movies_category-link  fs-4 fw-bold text-decoration-none  ">Xem Tất Cả</Link>
            </div>
            {showItem(film)}
        </div>
    )
}



export default Movies;
