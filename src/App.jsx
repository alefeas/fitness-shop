import {NavBar} from './components/navBar/NavBar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'

export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer name="Mancuerna 10kg" price="10000" img="https://d3ugyf2ht6aenh.cloudfront.net/stores/919/712/products/mancuerna-hexagonal-odea-10-kg-11-cc777ac81f2c3f76e416244933857566-1024-1024.png" stock={5}/>
      <ItemListContainer name="Banco Plano" price="36000" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWALOgF0cpKCI9bM52eADvm6P2y9KVcJn1eeqwZiOzr-VyYaAYcFV-V6Bt0Hnr4xKZL8A&usqp=CAU" stock={5}/>
      <ItemListContainer name="Barra Olímpica" price="20000" img="https://cdn.gmp.com.ar/wp-content/uploads/2017/06/1632489892a06d577ecfbd0884a7a8004067740c4e.jpg" stock={3}/>
      <ItemListContainer name="Barra W" price="12000" img="https://admin.turbysport.com.ar/Content/UploadDirectory/products/777/image_21bdd0c1-821a-43c7-a0d0-ff1f2ff8eff0.jpg" stock={7}/>
      <ItemListContainer name="Barra Romana" price="10000" img="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/322/568/products/1-br_barra-romana1-1a7c92ac1fb468022f16010352126723-640-0.jpg" stock={5}/>
    </>
  )
}