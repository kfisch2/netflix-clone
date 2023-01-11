import React from "react";

const Trailer = ({movie}) => {
  return (
    <div>
      <>
        {" "}
        <img className="gif" src={movie.thumbnail} type="gif" alt="" />
        <div className="info-box">
          {movie.title}
          {movie.duration}
          {movie.synopsis}
        </div>
      </>
    </div>
  );
};

export default Trailer;
