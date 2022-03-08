import OneSpecies from "./OneSpecies";

const Species = ({api}) => {

    return(
        <>
            {api.map((url, i) => (
                <section key={i}>
                    <OneSpecies url={url} />
                </section>
            ))}
        </>
    );
}

export default Species;