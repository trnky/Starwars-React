import { useState } from "react";
import FilmDetails from "./FilmDetails";

const Film = ({film}) => {

    const {director, title} = film;
    const [clicked, setClicked] = useState(false);

    console.log(film);
    

    return (
        <>
    
            <h2>{title}</h2>
            <div>directed by</div>
            <h3>{director}</h3>
            <button onClick={() => setClicked(!clicked)}>More details</button>
            {clicked && 
                <FilmDetails data={film}/>}
    
        </>
    )
}

export default Film;