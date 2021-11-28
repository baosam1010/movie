// import axios from "axios";
// import { useEffect } from "react";
// import {  useState } from "react";
// import LoadingItem from "../loadingItem/LoadingItem";
import Movies from "./movies/Movies";
import Nomination from "./nominated/Nomination";

function Main(props) {
    const category = [
        'Phim hành động',
        'Phim tình cảm',
        'phimhoathinh',
        'phimle',
        'phimbo',
        'phimchieurap',
    ];

    const {loading, setLoading} =props;
    
    const handleLoading=(loading) => {
        
        setLoading(loading);
    };

    const showCategory=(category, loading, setLoading)=>{
        let result = null;
        result = category.map((item, index)=>{
            return (<Movies loading={loading} setLoading={handleLoading} className="mt-10" key={index} category={item}/>)
        })
        return result;
    };

    return (
        <>
            <Nomination />
            {showCategory(category, loading, setLoading)}
        </>
    )
    
}

export default Main;
