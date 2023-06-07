import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import CartContextProvider from "./contexts/CartContext";
import navbar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error";
import ItemListFilteredContainer from "./components/ItemListFilteredContainer";
import CartView from "./components/CartView";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/east-side" element={<ItemListFilteredContainer categoria="Este" />} />
          <Route path="/category/west-side" element={<ItemListFilteredContainer categoria="Oeste" />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer /> 
      </CartContextProvider>
    </div>
  );
};

export default App;