import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Reestablecer from "./components/Reestablecer";



//El primero debe ser ItemListContainer para ver los productos
function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />
          
          <Routes>
            <Route path="/" element={<Nosotros />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/registro" element={<Registro />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/Reestablecer" element={<Reestablecer />}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;