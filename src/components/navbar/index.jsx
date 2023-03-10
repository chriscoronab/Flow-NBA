import styles from "./navbar.module.css";
import flowNBA from "../../assets/flow-nba.jpg";
import CartWidget from "../CartWidget";

const Navbar = () => {
  
  return (
    <header>
      <nav>
        <a href="#"><img className={styles.headerImg} src={flowNBA} alt="storeName" /></a>
        <p className={styles.listaMenu}>Nosotros</p>
        <p className={styles.listaMenu}>Contacto</p>
        <CartWidget />
      </nav>
    </header>
  )
};

export default Navbar;