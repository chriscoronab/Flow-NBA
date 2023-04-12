import styles from "./checkout.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Spinner from "../Spinner";
import ItemListButton from "../Buttons/ItemListButton";
import Form from "../Form";

const Checkout = () => {
  const { cart, totalCompra } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  if(loading) {
    return <Spinner />
  };
  return (
    <div>
      {orderId?
        <div className={styles.checkoutTitle}>
          <h2 >Compra realizada con éxito</h2>
          <h3>Tu orden de compra es: <span className={styles.orderId}>{orderId}</span></h3>
          <div className={styles.itemListButton}>
            <ItemListButton text="Volver al inicio" />
          </div>
        </div>
      : <>
          <h2 className={styles.checkoutTitle}>Checkout</h2>
          <section className={styles.checkoutSection}>
            <h3>Resumen de la compra:</h3>
            <div>
              {
                cart.map((product, cantidad, talle) =>
                <div key={product.id}>
                  <div>
                    <p>- {product.descripcion} - Talle {product.talle} x {product.cantidad}</p>
                  </div>
                </div>
                )
              }
              <div>
                <p>Precio total: ${totalCompra().toLocaleString()}</p>
              </div>
            </div>
          </section>
          <section>
            <h3 className={styles.checkoutTitle}>Completa el formulario para finalizar la compra:</h3>
            <Form setOrderId={setOrderId} setLoading={setLoading} />
          </section>
      </>
      }
    </div>
  );
};

export default Checkout;