import styles from "./navbar.module.css";
import flowNBA from "../../assets/flow-nba.jpg";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle={
    fontWeight: "bold",
  };
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img className={styles.headerImg} src={flowNBA} alt="storeName" />
        </NavLink>
        <NavLink to="/productos" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <p className={styles.menu}>Productos</p>
        </NavLink>
        <CartWidget />
      </nav>
    </header>
  )
};

export default Navbar;