const Card = ({ movie }) => {
  return (
    <>
      {" "}
      <div className="card-section">
        <h4>{movie.title}</h4>
        <h5>{movie.duration}</h5>
        <div>
          <img src={movie.thumbnail}/>
        </div>
      </div>
      ;
    </>
  );
};

export default Card;
