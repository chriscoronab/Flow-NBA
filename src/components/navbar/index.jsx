import styles from "./navbar.module.css";
import flowNBA from "../../assets/flow-nba.jpg";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="#"><img src={flowNBA} alt="storeName" /></a>
        <p>Nosotros</p>
        <p>Contacto</p>
        <div>
          <BsCart3 />
          <p>3</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;