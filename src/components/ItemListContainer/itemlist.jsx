import styles from "./itemlist.module.css";
import logo from "../../assets/logo.jpg";

const ItemListContainer = ({text}) => {
  return (
    <main>
      <section>
        <h1>{text}</h1>
        <img className={styles.logo} src={logo} alt="logo" />
      </section>
    </main>
  )
};

export default ItemListContainer;