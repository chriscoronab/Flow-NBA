import styles from "./cartview.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem";
import ItemListButton from "../Buttons/ItemListButton";
import EmptyCartButton from "../Buttons/EmptyCartButton";
import CheckoutButton from "../Buttons/CheckoutButton";

const CartView = () => {
    const { cart, vaciarCarrito, totalCompra } = useContext(CartContext);
    if (cart.length === 0) {
        return  <div className={styles.cart}>
                    <h2>No hay productos en el carrito</h2>
                    <ItemListButton text="Ver productos" />
                </div>
    };
    return (
        <div>
            <h2 className={styles.cartTitle}>Productos del carrito</h2>
            <section className={styles.cartList}>
            {
                cart.map((product) => <CartItem key={product.id} {...product}/>)
            }
            </section>
            <div className={styles.cartTitle}>
                <h3>Precio total: ${totalCompra().toLocaleString()}</h3>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.buttons}>
                    <EmptyCartButton vaciarCarrito={vaciarCarrito} />
                </div>
                <div className={styles.buttons}>
                    <CheckoutButton />
                </div>
            </div>
        </div>
    );
};

export default CartView;