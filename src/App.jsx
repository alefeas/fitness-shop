import {NavBar} from './components/navBar/NavBar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'

export const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <ItemListContainer/>
      </div>
    </>
  )
}