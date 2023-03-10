import styles from "./cartwidget.module.css";
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className={styles.carrito}>
        <BsCart3 />
        <p className={styles.carritoNumero}>3</p>
    </div>
  )
};

export default CartWidget;