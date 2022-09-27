import {NavBar} from './components/navBar/NavBar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer'
import { Cart } from "./components/cart/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './components/cartContext/CartContext'
import { Footer } from './components/footer/Footer'

export const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  )
}