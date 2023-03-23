import styles from "./buttons.module.css";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";

export default function ButtonIcons() {
  return (
    <Button startDecorator={<Add />}>Agregar al carrito</Button>
  );
};