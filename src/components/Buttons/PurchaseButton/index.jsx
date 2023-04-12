import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

function PurchaseButton({ purchase, item, quantity }) {
  return (
    <Link to="/cart">
      <Button variant="outlined" color="success" onClick={() => purchase(item, quantity)}>Finalizar compra</Button>
    </Link>
  );
};

export default PurchaseButton;