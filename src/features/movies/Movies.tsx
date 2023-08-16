import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieService from "../../services/movieService";
import Event from "../event/Event";
import Movie from "./Movie";

export default function Movies() {
  const [events, setEvent] = useState<Event[]>([]);

  useEffect(() => {
    MovieService.getLiveMovies().then((response) => setEvent(response.data));
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {events.map((event, index) => (
        <Movie movie={event} key={index} />
      ))}
    </Container>
  );
}
