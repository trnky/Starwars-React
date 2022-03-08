import { useEffect } from "react";
import { useState } from 'react';

const Character = ({url}) => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const resp = await fetch(url);
        const result = await resp.json();
        //console.log(result);
        result && setDetails(result);
    }
    return (
        <>
        <h3>Name: {details.name}</h3>
        <div> Gender: {details.gender}</div>
        </>
    )
}

export default Character;