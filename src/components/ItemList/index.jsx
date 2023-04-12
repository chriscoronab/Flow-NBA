import Card from "../Card";
import styles from "./itemlist.module.css";

const ItemList = ({ items }) => {
    return (
        <div className={styles.itemlist}>
            {items.map((item) => {
                return <Card key={item.id} item={item} />
            })}
        </div>
    );
};

export default ItemList;