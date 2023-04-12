import Button from "@mui/joy/Button";

function AddItemButton({ onAdd, count }) {
  return (
    <Button variant="outlined" color="success" onClick={() => onAdd(count)}>Agregar al carrito</Button>
  );
};

export default AddItemButton;