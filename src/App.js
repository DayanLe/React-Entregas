import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Cart from "./componentes/Cart/Cart"

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>ERROR 404 PAGINA NO ENCONTRADA</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
