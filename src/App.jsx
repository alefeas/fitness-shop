import {NavBar} from './components/navBar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './components/cartContext/CartContext'
import { Footer } from './components/footer/Footer'
import { AppRoutes } from './appRoutes/AppRoutes';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
    <ToastContainer/>
    </CartContextProvider>
  )
}