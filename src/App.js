import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Film from './Components/Film';

function App() {

  const [films, setFilms] = useState([]);
  const url = "https://swapi.dev/api/films/";

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    result && setFilms(result.results)
    console.log(result);
  }

  return (
    <div className="App">
      {films.map((film, i) => (
        <section className="movie" key={i}>
          <Film film={film} />
        </section>
      ))}
      
    </div>
  );
}

export default App;
