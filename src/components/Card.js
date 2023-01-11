import { useEffect, useState } from "react";
import Trailer from "./Trailer.js";
import Poster from "./Poster.js";

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(true);

  return (
    <div
      className="card"
      onMouseEnter={() => {
        setIsShown(false)
        
      }}
      onMouseLeave={() => {
        setIsShown(true)
      }}
    >
      {isShown && <Poster movie={movie} />}
      {!isShown && <Trailer movie={movie} />}
    </div>
  );
};

export default Card;
