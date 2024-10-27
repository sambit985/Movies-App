import React from "react";

export default function MovieCard({key, movie}){
    return(
        <div className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 hover:cursor-pointer duration-300 flex flex-col" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}>
           <div className="text-white text-xl text-center w-full bg-gray-900/60">
             {movie.original_title}
           </div>
        </div>
    )
}


//https://api.themoviedb.org/3/movie/popular?api_key=ad5e52b3fa2db8cf2276435a6b09da21&language=en-US&page=1