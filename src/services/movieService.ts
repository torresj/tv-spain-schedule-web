import http from "../common/http-commons";
import Event from "../features/event/Event";

const getLiveMovies = () => {
  return http.get<Event[]>("/movies/live");
};

const MovieService = {
  getLiveMovies,
};

export default MovieService;
