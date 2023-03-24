import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import equipos from "../productos.json";
import Navbar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListFiltered from "./components/ItemListFiltered";
import Footer from "./components/Footer";

function App() {
  const [productos, setProductos] = useState([]);
  const getProductos = () => {
  setProductos(equipos);
  };
  useEffect(() => {
  getProductos();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ItemListContainer productos={productos} />} />
        <Route path="/item/:id" element={<ItemDetailContainer productos={productos} />} />
        <Route path="/category/east-side" element={<ItemListFiltered productos={productos} categoria="Este" />} />
        <Route path="/category/west-side" element={<ItemListFiltered productos={productos} categoria="Oeste" />} />
        <Route path="/cart" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;