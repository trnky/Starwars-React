import Character from "./Character";

const Characters = ({api}) => {

    //const [characters, setCharacters] = useState([]);

    return (
        <>
            {api.map((url, i) => (
                <section key={i}>
                    <Character url={url} />
                </section>
            ))}
        </>
    );
}

export default Characters;