import styles from "./menu.module.css";
import { BiMenu } from "react-icons/bi";

const Menu = ({ handleClick }) => {
  return (
    <BiMenu className={styles.menu} onClick={handleClick} />
  );
};

export default Menu;