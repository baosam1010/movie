import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function ListMovies() {
    const params = useParams();
    const [movies, setMovies] = useState(null)
    console.log(params)
    useEffect(() => {
        const  getFilm=()=>{
            try {
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
    return (
        <div classnames="">
        <div className="">
            <h1>Phim mới</h1>
        </div>
            Day la trang List Movies
        </div>
    )
}

export default ListMovies
