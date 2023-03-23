import styles from "./itemdetail.module.css";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

const ItemDetailContainer = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);
  return (
    <div>
      <div className={styles.container}>
        <img src={`../../${producto.imagen}`} alt={producto.nombre} className={styles.image} />
        <div className={styles.textContainer}>
          <Typography gutterBottom variant="h4" component="div" key={producto.id}>
            {producto.nombre}
          </Typography>
          <p className={styles.text}>{producto.descripcion}</p>
          <p className={styles.text}>Precio: $ {producto.precio}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer;

