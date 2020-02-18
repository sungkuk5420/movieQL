export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 2
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 9
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 77
  },
  {
    id: 3,
    name: "Logan",
    score: 4
  }
];

export const getMovies = () => movies;
export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};
export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
