import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        mt: 20,
      }}
    >
      <section style={{ margin: "20px" }}>
        <Button variant="outlined">
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <img src="/movie.png" alt="movies" height={100} />
            <Typography m={1}>{"Películas"}</Typography>
          </Container>
        </Button>
      </section>
      <section style={{ margin: "20px" }}>
        <Button variant="outlined">
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <img src="/serie.png" alt="series" height={100} />
            <Typography m={1}>{"Series"}</Typography>
          </Container>
        </Button>
      </section>
    </Container>
  );
}
