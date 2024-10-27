import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

export default function Movies(){
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    const handlePrevPage = ()=>{
        if(pageNo > 1){
            setPageNo(pageNo - 1);
        }
    }
    const handlePostPage = ()=>{
        setPageNo(pageNo + 1);
    }
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ad5e52b3fa2db8cf2276435a6b09da21&language=en-US&page=${pageNo}`)
        .then((res)=>{
            setMovies(res.data.results);
        });
    }, [pageNo])
    return(
        <div className="p-5">
           <div className="text-center text-2xl font-bold m-5">
             Trending Movies
           </div>
           <div className="flex flex-row flex-wrap justify-around m-10 gap-8">
            {movies.map((movie, index) => {
                return <MovieCard key={index} movie={movie} />
            })}
           </div>
           <div>
               <Pagination pageNo={pageNo} handlePrevPage={handlePrevPage} handlePostPage={handlePostPage} />
           </div>
        </div>
    )
}