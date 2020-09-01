import { instanceOfAxiosWithBaseUrl } from "./axios";
import { constants } from "./constants";

export const fetchData = async (fetchURL, setMovies) => {
  const request = await instanceOfAxiosWithBaseUrl.get(fetchURL);

  setMovies(request.data.results);
};

export const fetchDataForBanner = async (fetchURL, setMovie) => {
  const request = await instanceOfAxiosWithBaseUrl(fetchURL);

  setMovie(
    request.data.results[
      Math.floor(Math.random() * request.data.results.length - 1)
    ]
  );
};

export const baseURLForGettingImages = "https://image.tmdb.org/t/p/original/";

export default {
  fetchTrending: `trending/all/week?api_key=${constants.API_KEY}&language=en-US`,

  fetchNetflixOriginals: `/discover/tv?api_key=${constants.API_KEY}&with_networks=213`,

  fetchTopRated: `movie/top_rated?api_key=${constants.API_KEY}&language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=28`,

  fetchComedyMoviews: `/discover/movie?api_key=${constants.API_KEY}&with_genres=35`,

  fetchDocumentaries: `/discover/movie?api_key=${constants.API_KEY}&with_genres=99`,

  fetchHorrorMoviews: `/discover/movie?api_key=${constants.API_KEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=10749`,

  fetchMysteryMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=9648`,

  fetchSciFiMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=878`,

  fetchWesternMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=37`,

  fetchAnimationMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=16`,

  fetchTV: `/discover/movie?api_key=${constants.API_KEY}&with_genres=10770`,
};
