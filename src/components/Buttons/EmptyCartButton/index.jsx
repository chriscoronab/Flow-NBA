import Button from "@mui/joy/Button";

function EmptyCartButton({ vaciarCarrito }) {
  return (
    <Button variant="outlined" color="danger" onClick={vaciarCarrito}>Vaciar carrito</Button>
  );
};

export default EmptyCartButton;