import React from "react";
import "../../styles/App.css";
import requests from "../../requests";

import { Row, Banner, Nav } from "../sources";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
       />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMoviews} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMoviews} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Mystery" fetchURL={requests.fetchMysteryMovies} />
      <Row title="Sci-Fi" fetchURL={requests.fetchSciFiMovies} />
      <Row title="Western" fetchURL={requests.fetchWesternMovies} />
      <Row title="Animation" fetchURL={requests.fetchAnimationMovies} />
      <Row title="TV" fetchURL={requests.fetchTV} />
    </div>
  );
};

export default App;
