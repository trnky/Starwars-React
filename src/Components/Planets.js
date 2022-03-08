import Planet from "./Planet";

const Planets = ({api}) => {

    return(
        <>
            {api.map((url, i) => (
                <section key={i}>
                    <Planet url={url} />
                </section>
            ))}
        </>
    );
}

export default Planets;
