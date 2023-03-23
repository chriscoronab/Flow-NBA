import styles from "./cartwidget.module.css";
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <BsCart3 className={styles.cartIcon} />
    </div>
  )
};

export default CartWidget;