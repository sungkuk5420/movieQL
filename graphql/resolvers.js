// import { getMovies, getById, addMovie, deleteMovie } from "./db";

// const resolvers = {
//   Query: {
//     movies: () => getMovies(),
//     movie: (_, { id }) => {
//       return getById(id);
//     }
//   },
//   Mutation: {
//     addMovie: (_, { name, score }) => addMovie(name, score),
//     deleteMovie: (_, { id }) => deleteMovie(id)
//   }
// };

// export default resolvers;

import { getMovies, getMoviesDetails, getMoviesSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movieDetails: (_, { id }) => getMoviesDetails(id),
    moviesSuggestions: (_, { id }) => getMoviesSuggestions(id)
  }
};

export default resolvers;
