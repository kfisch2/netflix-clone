import React from "react";

const Poster = ({ movie }) => {
  return (
    <div>
      <img className="poster" src={movie.poster} alt="" />
    </div>
  );
};

export default Poster;
