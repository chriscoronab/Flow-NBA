import Card from "../Card";
import styles from "./productlist.module.css";

const ProductList = ({ productos }) => {
  return (
    <div className={styles.productlist}>
        {productos.map((producto) => {
            return <Card key={producto.id} producto={producto} />;
        })}
    </div>
  )
};

export default ProductList;