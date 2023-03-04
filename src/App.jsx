import "./App.css";
import Navbar from "./components/Navbar/navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/itemlist.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer text="Bienvenido a Flow NBA" />
    </div>
  )
}

export default App;