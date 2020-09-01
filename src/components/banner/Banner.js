import React, { useState, useEffect } from "react";
import "../../styles/Banner.css";

import requests, {
  baseURLForGettingImages,
  fetchDataForBanner,
} from "../../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchDataForBanner(requests.fetchNetflixOriginals, setMovie);
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURLForGettingImages}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 300)}
        </h1>
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
};

export default Banner;
