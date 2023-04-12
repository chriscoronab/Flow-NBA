import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import styles from "./keepbuyingbutton.module.css";

function KeepBuyingButton({ purchase, item, quantity }) {
  return (
    <Link to="/">
      <Button className={styles.keepBuyingButton} variant="outlined" color="primary" onClick={() => purchase(item, quantity)}>Agregar más productos al carrito</Button>
    </Link>
  );
};

export default KeepBuyingButton;