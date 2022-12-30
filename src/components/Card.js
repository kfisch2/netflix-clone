const Card = ({ movie }) => {
  return (
    <>
      {" "}
      <div className="card">
        <h3>{movie.title}</h3>
        <h5>({movie.duration} minutes)</h5>
        <div className="image">
          <img src={movie.thumbnail}/>
        </div>
      </div>
    </>
  );
};

export default Card;
