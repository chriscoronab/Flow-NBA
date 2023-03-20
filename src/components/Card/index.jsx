import styles from "./card.module.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function ActionAreaCard({producto}) {
  return (
    <Link to={`/productos/${producto.id}`}>
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={`../.${producto.imagen}`}
          alt={producto.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" key={producto.id}>
            {producto.nombre}
          </Typography>
          <Typography variant="body1" className={styles.descripcion}>
            {producto.descripcion}
          </Typography>
          <Typography variant="body2">
            Precio: $ {producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
};

export default ActionAreaCard;