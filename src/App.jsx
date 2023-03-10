import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./components/ProductList";

function App() {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try{
      const result = await axios.get("../productos.json");
      setProductos(result.data);
    }catch(error){
      console.log("ERROR:", error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <ProductList productos={productos} />
      <ItemListContainer text="Bienvenido a Flow NBA" />
    </div>
  )
};

export default App;