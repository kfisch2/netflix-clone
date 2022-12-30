import { useEffect, useState } from "react";
import Card from "./Card.js";

const Section = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  const [pageState, setPageState] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/getMoviesByGenre",
      {
        method: "POST",
        body: JSON.stringify({ genre: genre, pageState: pageState }),
      }
    );
    const responseBody = await response.json();
    setMovies(responseBody.data.movies_by_genre.values);
    setPageState(responseBody.data.movies_by_genre.pageState);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>{genre}</div>
      {movies && (
        <div className="movie-section">
          {movies.map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
          <div
            className="more-button"
            onClick={() => {
              setPageState(pageState)
              fetchData()
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Section;
