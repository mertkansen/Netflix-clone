import constants from './api-key'

export default {
    fetchTrending: `trending/all/week?api_key=${constants.API_KEY}&language=en-US`,

    fetchTopRated: `movie/top_rated?api_key=${constants.API_KEY}&language=en-US`,

    fetchActionMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=28`,

    fetchComedyMoviews: `/discover/movie?api_key=${constants.API_KEY}&with_genres=35`,

    fetchHorrorMoviews: `/discover/movie?api_key=${constants.API_KEY}&with_genres=27`,

    fetchRomanceMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=10749`,

    fetchMysteryMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=9648`,

    fetchSciFiMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=878`,

    fetchWesternMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=37`,

    fetchAnimationMovies: `/discover/movie?api_key=${constants.API_KEY}&with_genres=16`,

    fetchTV: `/discover/movie?api_key=${constants.API_KEY}&with_genres=10770`,
}