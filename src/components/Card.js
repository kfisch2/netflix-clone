const Card = ({ movie }) => {
  return (
    <>
      {" "}
      <div className="card">
        <h3>{movie.title}</h3>
        <h5>({movie.duration} minutes)</h5>
        <div className="image">
          <video src={movie.thumbnail} type="video/mp4" autoPlay />
        </div>
      </div>
    </>
  );
};

export default Card;
