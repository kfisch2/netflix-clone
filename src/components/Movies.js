const Movies = ({ title, synopsis, duration, thumbnail }) => {
  return (
    <>
      <div className="movieSection">
        <img
          className="moviePoster"
          src={thumbnail}
          alt={`movie poster for ${title}`}
        />
        <div className="synopsis">
          <div className="align">{synopsis}</div>
        </div>
      </div>
    </>
  );
};

export default Movies;
