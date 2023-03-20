import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./components/ProductList";
import ProductItem from "./components/ProductItem";
import products from "../productos.json";
import atlantaHawks from "./assets/atlanta-hawks.jpg";

function App() {
  const [productos, setProductos] = useState([]);
  const getProductos = () => {
  setProductos(products);
  };
  useEffect(() => {
  getProductos();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ItemListContainer text="Bienvenido a Flow NBA" />} />
        <Route path="/productos" element={<ProductList productos={productos} />} />
        <Route path="/productos/:id" element={<ProductItem productos={productos} />} />
      </Routes>
    </div>
  )
};

export default App;