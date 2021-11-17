import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    // useNavigate,
    useParams
} from 'react-router-dom';

function MoviePage(props) {
    const [film, setFilm] = useState(null);
    let params = useParams();
    // let match = useNavigate();
    console.log('params: ', params);

    useEffect(() => {
        const getFilm = async () => {
            try {
                const films = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2YqtYz9YMi9NAuYMHIwCapR7B2_P7xUoGVrSdvFovDeNG6Ekrs-fGaHV8.html`);
                const { phimle, phimbo, phimchieurap, phimhoathinh } = films.data.phim;
                // console.log('films:',films)
                let filmsArr = [...phimle, ...phimbo, ...phimhoathinh, ...phimchieurap];
                let filmfilter = filmsArr.filter(item => {
                    return item.url.includes(params.slug);
                })
                console.log('filmfilter', filmfilter)
                setFilm(...filmfilter)
            } catch (error) {
                console.log(error)
            }
        }
        getFilm();
        return () => {
            setFilm(null)
        };
    }, [params]);
    console.log('film', film)
    const showMovie = (film) => {
        let html = null;
        if (film) {
            const { title, episode } = film;
            const { type: Type, url: urlMovie } = episode[0];
            html = (
                <div className="my-10">
                    <Type
                        src={urlMovie}
                        // className="w-100 height-500"
                        width="100%"
                        height="600"
                    >
                    </Type>
                    <p>{title}</p>
                </div>
            )
        }
        return html;
    };
    return (
        <div className="mt-20 mb-20">
            <div>
                {showMovie(film)}
            </div>
            Dy la trang movie
        </div>
    )
}

export default MoviePage
