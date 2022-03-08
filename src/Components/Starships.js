import Starship from "./Starship";

const Starships = ({api}) => {

    return (
        <>
            {api.map((url, i) => (
                <section key={i}>
                    <Starship url={url} />
                </section>
            ))}
        </>
    );
}

export default Starships;