import styles from "./cartwidget.module.css";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartWidget = () => {
  const value = useContext(CartContext);
  return (
    <div className={styles.cart}>
      <BsCart3 className={styles.cartIcon} />
    </div>
  )
};

export default CartWidget;