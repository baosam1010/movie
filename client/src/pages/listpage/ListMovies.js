import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './css/ListMovies.css';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import classnames from 'classnames';

const Loading = () => (
    <div className="w-100 bg-white mt-5 rounded">
        <h5 className="text-center py-2 fs-4">Loading...</h5>
    </div>
);


function ListMovies(props) {
    const params = useParams();
    console.log('params:', params)
    const [movies, setMovies] = useState([]);
    const [category] = useState({phimbo:'Phim Bộ', phimchieurap:'Phim Chiếu Rạp', phimle:'Phim Lẻ', phimhoathinh:'Phim Hoạt Hình', phimhanhdong:'Phim Hành Động', phimtinhcam:'Phim Tình Cảm'});
    // console.log('props_Listmovies', props)
    const { setLoading } = props;


    useEffect(() => {
        const getFilm = async () => {
            try {
                setLoading(true);
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
                        }else if(item.url.includes(params.slug)) {
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


                setLoading(false);

            } catch (error) {
                console.log(error)
            }
        }
        getFilm();
        return () => {
            setMovies([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.slug]);

    // console.log('list movies:', movies)
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
    let result = null;
    const convertCategory = (slug)=>{
        if(category.hasOwnProperty(slug)){
            result = category[slug];
        }
        else{
            result = slug;
        }
        return result
    }
    convertCategory(params.slug);

    return (
        <div classnames="listmovie">
            <nav className="listmovie-nav">
                <ol className="">
                    <li className=""><Link to="/" className=""><i className="fas fa-home"></i>Home</Link></li>
                    <span className="px-2"><i className="fas fa-chevron-right"></i></span>
                    <li className=" " aria-current="page"><Link to={`/category/${params.slug}`} className="">{result}</Link></li>
                </ol>
            </nav>
            <div className="listmovie-info">
                <h1 className=""><span className="">{result}</span>{` mới nhất .Tổng hợp danh sách Phim Hành
                 Động hay được web cập nhật liên tục.Tải Phim Hành Động năm 2021,
                  Xem Phim Hành Động vietsub, thuyết minh mới nhất, 
                  Tổng hợp Phim Hành Động hay nhất 2021
                `}</h1>
            </div>
                <h2 className={classnames (movies.length === 0 ? 'd-block':'d-none', 'fs-3 text-white mt-3')}>Không tìm thấy</h2>

            <Row lg={12} className="g-3">
                {showMovies(movies)}
            </Row>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        onSearch: state.Search,
    }
};
export default connect(mapStateToProps, null)(ListMovies);
