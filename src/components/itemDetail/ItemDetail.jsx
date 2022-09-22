import { ItemCount } from '../itemCount/ItemCount'
import '../../styles/ItemDetail.css'
import { Link } from 'react-router-dom'
import { useState, useContext} from 'react'
import { CartContext } from "../cartContext/CartContext"

export const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0)
    const ctx = useContext(CartContext)

    const onAdd = (quantity) => {
        if(quantity>0){
            setItemCount(quantity)
            alert('Has seleccionado ' + quantity + ' productos')
        }
        else if(quantity==0){
            alert('¡NO TENEMOS STOCK DE ESTE PRODUCTO!')
        }
        setItemCount(quantity)
        ctx.addItem(item, quantity)
    }

    return (
        <>
        {
            item.img
            ?
            <div className='productDetail'>
                <img src={item.img} width='800px' alt={item.name} />
                <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Precio: {item.price}</p>
                    <p>Stock disponible: {item.stock}</p>
                {
                    itemCount == 0
                    ?
                    <ItemCount onAdd={onAdd} stock={item.stock} initial={item.stock==0 ? 0 :1}/>
                    : <Link to='/cart'><button>Ver En Carrito</button></Link>
                }
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}