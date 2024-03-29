import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  // eslint-disable-next-line max-len
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.poster;
  return (
    <div className="movie">
      <h2> {movie.Title} </h2>
      <div>
        <img
          src={poster}
          width={200}
          alt={`The movie titled: ${movie.Title}`}
        />
      </div>
      <p>
        ({ movie.Year })
      </p>
    </div>
  );
};

export default Movie;
