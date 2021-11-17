// import axios from "axios";
// import { useEffect } from "react";
import Movies from "./movies/Movies";
import Nomination from "./nominated/Nomination";

function Main() {
    const category = [
        'Phim hành động',
        'Phim tình cảm',
        'phimhoathinh',
        'phimle',
        'phimbo',
        'phimchieurap',
    ];

    // useEffect(() => {
    //     const getAllFilm = async()=>{
    //         try {
    //             const films = await axios.get(`https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2YqtYz9YMi9NAuYMHIwCapR7B2_P7xUoGVrSdvFovDeNG6Ekrs-fGaHV8.html`)
    //             console.log('films', films.data.phim)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
    //     getAllFilm();
    //     return () => {
            
    //     }
    // }, []);

    const showCategory=(category)=>{
        let result = null;
        result = category.map((item, index)=>{
            return (<Movies className="mt-10" key={index} category={item}/>)
        })
        return result;
    }
    return (
        <>
            <Nomination />
            {showCategory(category)}
        </>
    )
}

export default Main;
