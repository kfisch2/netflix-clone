import "./App.css";
import { useEffect, useState } from "react";
import Section from "./components/Section.js";
import Movies from "./components/Movies.js";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";

const App = () => {
  const genreIncrement = 4;
  const [limit, setLimit] = useState(genreIncrement);
  const [genres, setGenres] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/getAllGenres",
      {
        method: "POST",
        body: limit,
      }
    );
    const responseBody = await response.json();
    console.log(responseBody)
    setGenres(responseBody.data.genres.values);
  };

  useEffect(() => {
    fetchData();
    // empty array to ensure the GET request is performed only once
    // [, limit] -> fetch the data every time the limit changes
  }, [, limit]);

  return (
    <>
      <div className="main-page">
        <Nav />
        <Hero />
        {genres && (
          <div className="container">
            {Object.values(genres).map((genre, i) => (
              <Section genre={genre.value} key={i} />
            ))}
          </div>
        )}
      </div>{" "}
      <div
        className="page-end"
        onMouseEnter={() => {
          setLimit(limit + genreIncrement);
        }}
      ></div>
    </>
  );
};

export default App;
