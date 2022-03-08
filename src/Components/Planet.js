import { useEffect } from "react";
import { useState } from 'react';

const Planet = ({url}) => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const resp = await fetch(url);
        const result = await resp.json();
        //console.log(result);
        result && setDetails(result);
    }
    return (
        <>
            <h3>Name: {details.name}</h3>
            <div>Climate: {details.climate}</div>
            <div>Terrain: {details.terrain}</div>
        </>
    )

}

export default Planet;