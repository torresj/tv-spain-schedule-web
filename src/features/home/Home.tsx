import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        mt: 10,
      }}
    >
      <section style={{ margin: "20px" }}>
        <Button variant="outlined" onClick={(event) => navigate("/movies")}>
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
