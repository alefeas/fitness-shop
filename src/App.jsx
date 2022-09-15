import {NavBar} from './components/navBar/NavBar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}