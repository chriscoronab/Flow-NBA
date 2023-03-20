import styles from "./productitem.module.css";
import { useParams } from "react-router-dom";

const ProductItem = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);
  return (
    <div>
      <div className={styles.container}>
        <img src={`../../${producto.imagen}`} alt={producto.nombre} className={styles.imagen} />
        <div>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>Precio: $ {producto.precio}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;