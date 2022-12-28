import "./App.css";
import { useEffect, useState } from "react";
import Section from "./components/Section.js";
import Movies from "./components/Movies.js";

const App = () => {
  const [genres, setGenres] = useState();
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/getAllGenres"
    );
    const responseBody = await response.json();
    setGenres(responseBody.data.reference_list.values);
  };

  const fetchMovies = async () => {
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/getMoviesByGenre"
    );
    const responseBody = await response.json();
    setMovies(responseBody.data.movies_by_genre.values);
  };

  useEffect(() => {
    fetchData();
    // empty array to ensure the GET request is performed only once
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className="glow">NETFLIX CLONE</h1>
      <h2>Genres</h2>
      <form>
        <label for="genres">Choose a genre:</label>
        <select name="genres" id="genres">
          {genres &&
            Object.values(genres).map((genre, i) => (
              <option value={genre.value}>{genre.value}</option>
            ))}
        </select>

        <input type="submit" value="Submit" />
      </form>

      <h2 className="genreTitle">Comedies</h2>
      {movies &&
        Object.values(movies).map((movie, i) => (
          <div>
            <Movies
              title={movie.title}
              synopsis={movie.synopsis}
              duration={movie.duration}
              thumbnail={movie.thumbnail}
              key={i}
            />
          </div>
        ))}
    </>
  );
};

export default App;
