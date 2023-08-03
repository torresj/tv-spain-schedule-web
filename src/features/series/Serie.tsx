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

interface ISerie {
  serie: Event;
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

export default function Serie(props: ISerie) {
  const serie = props.serie;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised sx={{ width: 270, mt: 6 }}>
      {serie.rate && (
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
            {serie.rate?.toFixed(1)}
          </Typography>
        </div>
      )}
      {serie.imageUrl && (
        <CardMedia
          height={400}
          component="img"
          alt={`${serie.name}`}
          image={`${serie.imageUrl ?? ""}`}
        />
      )}
      {!serie.imageUrl && (
        <div
          style={{ height: 400, width: 270, backgroundColor: "ghostwhite" }}
        ></div>
      )}
      <CardContent>
        <Typography variant="h6" component="div">
          {serie.name}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {serie.classification}
        </Typography>
        <Typography variant="subtitle2" component="div">
          {serie.chapterName}
        </Typography>
        <Stack direction="row" alignItems="center" mt={1}>
          <img
            alt={`${serie.channel.name}`}
            src={`${serie.channel.logoUrl}`}
            style={{ marginRight: 30 }}
          />
          <Typography component="div">
            {new Date(serie.start).toLocaleTimeString("es", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(serie.end).toLocaleTimeString("es", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={serie.progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >{`${serie.progress}%`}</Typography>
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
            <strong>Canal:</strong> {serie.channel.name}
          </Typography>
          <Typography paragraph>
            <strong>{"Duración"}:</strong> {serie.duration}
          </Typography>
          <Typography paragraph textAlign={"justify"}>
            <strong>Sinopsis:</strong> {serie.synopsis}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
