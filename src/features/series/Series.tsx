import React, { useEffect, useState } from "react";
import SerieService from "../../services/serieService";
import Event from "../event/Event";
import { Container } from "@mui/material";
import Serie from "./Serie";

export default function Series() {
  const [events, setEvent] = useState<Event[]>([]);

  useEffect(() => {
    SerieService.getLiveSeries().then((response) => setEvent(response.data));
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
      {events.map((event) => (
        <Serie serie={event} />
      ))}
    </Container>
  );
}
