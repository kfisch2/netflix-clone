import { useState } from "react";

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);

  // for transition from movie poster to clip on hover
  const timer = (number) => {
    setTimeout(timer);
  };

  return (
    <div
      className="card"
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
    >
      {!isShown && <img src={movie.poster} alt="" />}

      {isShown && (
        <>
          {" "}
          <img src={movie.thumbnail} alt="" />
          <div className="info-box">
            {movie.title}
            {movie.duration}
            {movie.synopsis}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
