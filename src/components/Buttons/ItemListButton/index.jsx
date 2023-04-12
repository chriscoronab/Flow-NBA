import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

function ItemListButton({ text }) {
  return (
    <Link to="/">
      <Button variant="outlined" color="primary">{text}</Button>
    </Link>
  );
};

export default ItemListButton;