import styles from "./cartwidget.module.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <Link to="/cart">
        <BsCart3 className={styles.cartIcon} />
      </Link>
      <p className={styles.cartNumber}>3</p>
    </div>
  )
};

export default CartWidget;