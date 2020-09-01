import React, { useState, useEffect } from "react";
import '../../styles/Row.css'

import { fetchData, baseURLForGettingImages } from "../../requests";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData(fetchURL, setMovies);
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies?.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            key={movie.id}
            src={`${baseURLForGettingImages}${isLargeRow ? movie.poster_path : movie?.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
