import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

function CheckoutButton() {
  return (
    <Link to="/checkout">
      <Button variant="outlined" color="success">Finalizar compra</Button>
    </Link>
  );
};

export default CheckoutButton;