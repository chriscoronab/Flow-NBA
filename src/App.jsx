import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./components/ProductList";
import ProductItem from "./components/ProductItem";

function App() {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try{
      const result = await axios.get(`../productos.json`);
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