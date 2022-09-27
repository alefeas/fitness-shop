import { Loader } from '../loader/Loader'
import { ItemCount } from '../itemCount/ItemCount'
import '../../styles/ItemDetail.css'
import { Link } from 'react-router-dom'
import { useState, useContext} from 'react'
import { CartContext } from "../cartContext/CartContext"

export const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0)
    const ctx = useContext(CartContext)

    const onAdd = (quantity, e) => {
        if(quantity>0){
            setItemCount(quantity)
            alert('Has seleccionado ' + quantity + ' productos')
        }
        else if(quantity==0){
            alert('¡NO TENEMOS STOCK DE ESTE PRODUCTO!')
            e.preventDefault()
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
                <div className='containerInfo'>
                    <p className='nameItemDetail'>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Stock: {item.stock==0?'NO DISPONIBLE' :'DISPONIBLE'}</p>
                {
                    item.stock == 0 || itemCount !=0
                    ?
                    <div className=''>
                    <Link to='/'><button>Ir al inicio</button></Link>
                    <Link to='/cart'><button>Ir al carrito</button></Link>
                    </div>
                    : <ItemCount onAdd={onAdd} stock={item.stock} initial={item.stock==0 ? 0 :1}/>
                }
                </div>
            </div>
            : <Loader/>

        }
        </>
    );
}