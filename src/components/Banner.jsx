import React from "react";

function Banner(){
    return(
        <div className="h-[550px] bg-cover bg-center flex items-end" style={{backgroundImage: `url(https://i.pinimg.com/originals/19/10/68/19106875a6603576111ba924bb15c12a.jpg)`}}>
            <div className="text-white text-xl bg-dark-700/80 text-center w-full p-4">Avengers Endgame</div>
        </div>
    )
}

export default Banner;