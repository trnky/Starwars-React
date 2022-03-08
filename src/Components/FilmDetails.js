import { useState } from "react"
import Characters from "./Characters";
import Species from "./Species";
import Starships from "./Starships";
import Planets from "./Planets";

const FilmDetails = ({data}) => {
    
    //console.log(data.characters);

    // const [characters, setCharacters] = useState([]);
    // const [planets, setPlanets] = useState([]);
    // const [species, setSpecies] = useState([]);
    // const [starships, setStarships] = useState([]);

    const [clickedChar, setClickedChar] = useState(false);
    const [clickedPl, setClickedPl] = useState(false);
    const [clickedSp, setClickedSp] = useState(false);
    const [clickedSt, setClickedSt] = useState(false);
    
    
    return(
        <>
            <button onClick={() => setClickedChar(!clickedChar)}>Characters</button>
            {clickedChar &&
                <Characters api={data.characters} />}
            

            <button onClick={() => setClickedPl(!clickedPl)}>Planets</button>
            {clickedPl &&
                <Planets api={data.planets} />}

            <button onClick={() => setClickedSp(!clickedSp)}>Species</button>
            {clickedSp &&
                <Species api={data.species} />}
            <button onClick={() => setClickedSt(!clickedSt)}>Starships</button>
            {clickedSt &&
                <Starships api={data.starships} />}
        </>
    );
}

export default FilmDetails;