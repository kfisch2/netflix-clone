import { useState } from "react";

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);

  // timer for transitioning from poster to gif
  const transition = () => {
    setTimeout(() => {
      setIsShown(!false)
    }, 300)
  }


  return (
    <div
      className="card"
      onMouseEnter={() => {
        transition();
  
      }}
      onMouseLeave={() => {
        clearTimeout(transition)
        setIsShown(false);
       
      }}
    >
      {!isShown && <img className="poster" src={movie.poster} alt=""/>}

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
