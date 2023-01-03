const Card = ({ movie }) => {
  return (
    <>
      {" "}
      <div className="card">
        <h3>{movie.title}</h3>
        <div className="image">
          <img src={movie.thumbnail} alt=""/>
        </div>
      </div>
    </>
  );
};

export default Card;
