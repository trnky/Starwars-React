import { useEffect } from "react";
import { useState } from 'react';

const Starship = ({url}) => {

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
            <div>Manufacturer: {details.manufacturer}</div>
            <div>Class: {details.starship_class}</div>
        </>
    )
}

export default Starship;