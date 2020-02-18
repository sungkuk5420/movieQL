import { getMovies, getById, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => {
      return getById(id);
    }
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score)
  }
};

export default resolvers;
