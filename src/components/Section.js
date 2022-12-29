import { useEffect, useState } from "react";
import Card from "./Card.js";

const Section = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/getMoviesByGenre", {
        method: 'POST',
        body: JSON.stringify( { genre: genre, })
      }
    );
    const responseBody = await response.json();
    console.log(responseBody.data.movies_by_genre.values)
    setMovies(responseBody.data.movies_by_genre.values);
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
        </div>
      )}
    </>
  );
};

export default Section;
