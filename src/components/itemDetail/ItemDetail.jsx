import { ItemCount } from '../itemCount/ItemCount'
import '../../styles/ItemDetail.css'

export const ItemDetail = ({item}) => {
    return (
        <>
        {
            item.img
            ?
            <div className='productDetail'>
                <img src={item.img} width='800px' alt="" />
                <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Precio: {item.price}</p>
                    <p>Stock disponible: {item.stock}</p>
                    <ItemCount stock={item.stock} initial={1}/>
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

