import http from "../common/http-commons";
import Event from "../features/event/Event";

const getLiveSeries = () => {
  return http.get<Event[]>("/series/live");
};

const SerieService = {
  getLiveSeries,
};

export default SerieService;
