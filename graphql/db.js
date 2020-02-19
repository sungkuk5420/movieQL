// export let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The new one",
//     score: 2
//   },
//   {
//     id: 1,
//     name: "Avengers - The new one",
//     score: 9
//   },
//   {
//     id: 2,
//     name: "The Godfather I",
//     score: 77
//   },
//   {
//     id: 3,
//     name: "Logan",
//     score: 4
//   }
// ];

// export const getMovies = () => movies;
// export const getById = id => {
//   const filteredMovies = movies.filter(movie => movie.id === id);
//   return filteredMovies[0];
// };
// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length}`,
//     name,
//     score
//   };
//   movies.push(newMovie);
//   return newMovie;
// };

// export const deleteMovie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

import fetch from "node-fetch";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json?`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json?`;

export const getMovies = (limit, rating) => {
  let REQUEST_URL = LIST_MOVIES_URL;
  if (limit) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  console.log(REQUEST_URL);
  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};

export const getMoviesDetails = id => {
  let REQUEST_URL = `${MOVIE_DETAILS_URL}movie_id=${id}`;
  console.log(REQUEST_URL);
  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movie);
};
export const getMoviesSuggestions = id => {
  let REQUEST_URL = `${MOVIE_SUGGESTIONS_URL}movie_id=${id}`;
  console.log(REQUEST_URL);
  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};
