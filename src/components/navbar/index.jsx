import styles from "./navbar.module.css";
import flowNBA from "../../assets/flow-nba.jpg";
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink to="/category/east-side" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <p className={styles.menu}>East Side</p>
        </NavLink>
        <NavLink to="/category/west-side" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <p className={styles.menu}>West Side</p>
        </NavLink>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </header>
  )
};

export default Navbar;