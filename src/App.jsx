import {NavBar} from './components/navBar/NavBar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer'

export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  )
}