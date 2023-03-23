import styles from "./itemlistfiltered.module.css";
import Card from "../Card";

const ItemListFiltered = ({ productos, categoria }) => {
    return (
        <div className={styles.itemlist}>
            {productos.map((producto, id) => (producto.categoria==categoria?<Card key={id} producto={producto} />:null)
            )};
        </div>
    );
};

export default ItemListFiltered;