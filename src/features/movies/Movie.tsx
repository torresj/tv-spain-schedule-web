import React, { useState } from "react";
import Event from "../event/Event";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  LinearProgress,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IMovie {
  movie: Event;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Movie(props: IMovie) {
  const movie = props.movie;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised sx={{ width: 270, mt: 6 }}>
      <div
        style={{
          position: "absolute",
          height: 45,
          width: 45,
          backgroundColor: "#1976d2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          {movie.rate?.toFixed(1)}
        </Typography>
      </div>
      {movie.imageUrl && (
        <CardMedia
          height={400}
          component="img"
          alt={`${movie.name}`}
          image={`${movie.imageUrl ?? ""}`}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div">
          {movie.name}
        </Typography>
        <Typography variant="subtitle2" component="div">
          {movie.classification}
        </Typography>
        <Stack direction="row" alignItems="center" mt={1}>
          <img
            alt={`${movie.channel.name}`}
            src={`${movie.channel.logoUrl}`}
            style={{ marginRight: 30 }}
          />
          <Typography component="div">
            {new Date(movie.start).toLocaleTimeString("es", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(movie.end).toLocaleTimeString("es", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={movie.progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >{`${movie.progress}%`}</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <strong>Canal:</strong> {movie.channel.name}
          </Typography>
          <Typography paragraph>
            <strong>{"Duración"}:</strong> {movie.duration}
          </Typography>
          <Typography paragraph textAlign={"justify"}>
            <strong>Sinopsis:</strong> {movie.synopsis}
          </Typography>
          <Typography paragraph>
            <strong>Director:</strong> {movie.director}
          </Typography>
          <Typography paragraph>
            <strong>{"Intérpretes"}:</strong> {movie.interpreters}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
