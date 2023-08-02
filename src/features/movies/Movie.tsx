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
    <Card raised sx={{ width: 345, mt: 6 }}>
      {movie.imageUrl && (
        <CardMedia
          height={500}
          component="img"
          alt={`${movie.name}`}
          image={`${movie.imageUrl ?? ""}`}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.name}
        </Typography>
        <Stack direction="row" alignItems="center" mt={4}>
          <img
            alt={`${movie.channel.name}`}
            src={`${movie.channel.logoUrl}`}
            style={{ marginRight: 30 }}
          />
          <Typography gutterBottom variant="h6" component="div" sx={{ mt: 1 }}>
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
        <Stack
          mt={2}
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Typography variant="h6" mt={2}>
            {"Puntuación en TMDB"}
          </Typography>
          <Box
            sx={{
              height: 50,
              width: 50,
              backgroundColor: "#1976d2",
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {movie.rate?.toFixed(1)}
            </Typography>
          </Box>
        </Stack>
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
          <Typography paragraph>Sinopsis:</Typography>
          <Typography paragraph>{movie.synopsis}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
