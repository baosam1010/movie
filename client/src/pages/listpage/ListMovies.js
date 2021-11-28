import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './css/ListMovies.css';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import { Row, Col } from 'react-bootstrap';

const Loading = () => (
    <div className="w-100 bg-white mt-5 rounded">
        <h5 className="text-center py-2 fs-4">Loading...</h5>
    </div>
);


function ListMovies() {
    const params = useParams();
    // console.log('params:', params)
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const getFilm = async () => {
            try {
                const flims = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2YqtYz9YMi9NAuYMHIwCapR7B2_P7xUoGVrSdvFovDeNG6Ekrs-fGaHV8`);
                // console.log(flims)
                const { phimle, phimbo, phimchieurap, phimhoathinh } = flims.data.phim;
                const filmArr = [...phimle, ...phimbo, ...phimchieurap, ...phimhoathinh]
                // console.log(filmArr)
                if (flims.data.phim.hasOwnProperty(params.slug)) {
                    setMovies(flims.data.phim[params.slug].slice(0, 50))
                }
                else {
                    let filmFilter = filmArr.filter(item => {
                        let result = null;
                        let converCategory = item.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/đ/g, 'd').replace(/Đ/g, 'd').replace(/ /g, "")
                        if (converCategory === params.slug) {
                            result = item;
                        }
                        return result;
                    })
                    if (filmFilter) {
                        let newArr = filmFilter.slice(0, 50);
                        // console.log('newArr:',newArr)
                        setMovies(newArr);
                    }

                    // console.log('filmFilter:', filmFilter)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getFilm();
        return () => {
            setMovies(null);
        }
    }, [params.slug]);

    console.log('list movies:', movies)
    const showMovies = (movies) => {
        let html = null;
        if (movies) {
            html = movies.map(item => {
                const { url } = item
                let nameIndex = 0;
                if (url.search('/p/')) {
                    nameIndex = url.indexOf('/p/') + 2;
                } else if (url.search('/phim/')) {
                    nameIndex = url.indexOf('/phim/') + 5;
                }
                let nameMovie = url.substring(nameIndex);
                return (
                    <Col key={item.url} lg={3} className="positon-relative">
                        <LazyLoad placeholder={<Loading />}>
                            <Link to={nameMovie}>
                                <img className="w-100" style={{ height: "300px", objectFit: "cover" }} src={item.imageUrl} alt={item.title} />
                            </Link>
                        </LazyLoad>
                        <div className="bg-black bg-opacity-75">
                            <p className="p-2 text-truncate text-white fs-5 fw-bold">{item.title}</p>
                        </div>
                    </Col>

                )
            })
        }
        return html;
    };

    return (
        <div classnames="listmovie">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" className="fs-3 fw-bold text-white">Home</Link></li>
                    <li className="breadcrumb-item " aria-current="page"><Link to={`/category/${params.slug}`} className="fs-3 fw-bold text-white">{params.slug}</Link></li>
                </ol>
            </nav>
            <div className="">
                <h1>{`Phim mới Phim Hành Động mới nhất ,Tổng hợp danh sách Phim Hành
                 Động hay được web cập nhật liên tục.Tải Phim Hành Động năm 2021,
                  Xem Phim Hành Động vietsub, thuyết minh mới nhất, 
                  Tổng hợp Phim Hành Động hay nhất 2021
                `}</h1>
            </div>

            <Row lg={12} className="g-3">
                {showMovies(movies)}
            </Row>

        </div>
    )
}

export default ListMovies
