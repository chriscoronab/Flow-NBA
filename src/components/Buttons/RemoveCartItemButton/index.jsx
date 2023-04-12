import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function RemoveCartItemButton({ removeItem, id, talle, cantidad }) {
  return (
      <Button variant="outlined" color="error" onClick={() => {removeItem(id, talle, cantidad)}} startIcon={<DeleteIcon />}>
        Eliminar producto
      </Button>
  );
};

export default RemoveCartItemButton;