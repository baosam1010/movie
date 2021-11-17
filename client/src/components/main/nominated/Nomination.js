import axios from 'axios';
import {
    useEffect,
    useRef,
    useState
} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import {  Ratio} from "react-bootstrap";
// import Ratio from 'react-bootstrap/Ratio'
import './css/nomination.css';

function Nomination(props) {
    const [movies, setMovies] = useState(null);
    let slider = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    useEffect(() => {
        const getMovies = async () => {
            try {

                const movieAll = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2YqtYz9YMi9NAuYMHIwCapR7B2_P7xUoGVrSdvFovDeNG6Ekrs-fGaHV8.html`);
                let movieArr = [...movieAll.data.phim.phimbo, ...movieAll.data.phim.phimle, ...movieAll.data.phim.phimchieurap, ...movieAll.data.phim.phimhoathinh]
                let phimhanhdong = movieArr.filter(item => {
                    return item.category === "Phim hành động"
                })
                // console.log('phimhanhdong:', phimhanhdong);
                setMovies(phimhanhdong.slice(phimhanhdong.length - 25))
                // console.log(movieArr);

            } catch (error) {
                console.log(error)
            }
        }
        getMovies();
        return () => {
            setMovies(null);
        }
    }, [])
    console.log('movies:', movies)
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red", transform:'translate(-200%,0)' }}
                onClick={onClick}
            />
        );
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" ,transform:'translate(200%,0)'}}
                onClick={onClick}
            />
        );
    };

    const showCarouselItem = (movies) => {
        let result = null;
        if (movies) {
            result = movies.map(item => {
                // console.log('item:', item)
                const { url } = item;
                let nameIndex = 0;
                if (url.search('/p/')) {
                    nameIndex = url.indexOf('/p/') + 2;
                } else if (url.search('/phim/')) {
                    nameIndex = url.indexOf('/phim/') + 5;
                }
                let nameMovie = url.substring(nameIndex);
                // console.log('nameMovie:', nameMovie);  
                return (

                    <Link to={`${nameMovie}`} key={item.url}>
                        <img
                            className="d-block w-100"
                            src={item.imageUrl}
                            alt={`First slide`}
                        />
                    </Link>


                )
            })
        }
        return result;
    };

    const next = () => {
        slider.slickNext();
    };
    const previous = () => {
        slider.slickPrev();
    };

    let html = null;
    html = (
        <div className="nomication_movie mt-4 mb-4">

            <div className="btn" >
                <button
                    className="btn-primary"
                    onClick={previous}
                >
                    <i className=" fas fa-chevron-left"></i>
                </button>
                <button
                    className="btn-primary"
                    onClick={next}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <Slider ref={(c) => (slider = c)}  {...settings}
                className="addMargin"

            >
                {showCarouselItem(movies)}
            </Slider>

        </div>
    )
    return html;
}

export default Nomination
