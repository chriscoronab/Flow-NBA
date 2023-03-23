import Card from "../Card";
import styles from "./itemlist.module.css";

const ItemListContainer = ({ productos }) => {
    return (
        <div className={styles.itemlist}>
            {productos.map((producto) => {
                return <Card key={producto.id} producto={producto} />
            })}
        </div>
    );
};

export default ItemListContainer;