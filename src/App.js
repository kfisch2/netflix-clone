import "./App.css";
import { useEffect, useState } from "react";
import Section from "./components/Section.js";
import Movies from "./components/Movies.js";

const App = () => {
  const genreIncrement = 4;
  const [limit, setLimit] = useState(genreIncrement);
  const [genres, setGenres] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/getAllGenres", {
        method: 'POST', 
        body: limit
      }
    );
    const responseBody = await response.json();
    setGenres(responseBody.data.reference_list.values);
  };

  useEffect(() => {
    fetchData();
    // empty array to ensure the GET request is performed only once
  }, []);

  return (
    <>
      <h1 className="glow">NETFLIX CLONE</h1>
      {genres &&
        Object.values(genres).map((genre) => <Section genre={genre.value} />)}
        <div></div>
    </>
  );
};

export default App;
