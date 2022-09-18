import { ItemCount } from '../itemCount/ItemCount'
import '../../styles/ItemDetail.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0)

    const onAdd = (count) => {
        if(count>0){
            alert('Has seleccionado ' + count + ' productos')
            setItemCount(count)
        }
        else if(count==0){
            alert('¡NO TENEMOS STOCK DE ESTE PRODUCTO!')
        }
    }
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