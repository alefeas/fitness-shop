import { Loader } from '../loader/Loader'
import { ItemCount } from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState, useContext} from 'react'
import { CartContext } from "../../context/CartContext"
import '../../styles/styles.scss'

export const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0)
    const ctx = useContext(CartContext)

    const onAdd = (quantity, e) => {
        setItemCount(quantity)
        ctx.addItem(item, quantity)
    }

    return (
        <>
            {
            item.img
            ?
            item.stock === 0 ?
                <div className='productDetail'>
                    <img src={item.img} alt={item.name} />
                    <div className='containerInfo'>
                        <p className='nameItemDetail'>{item.name}</p>
                        <p className='descItemDetail secondaryFont'>{item.description}</p>
                        <p className='secondaryFont'>Precio:<span className='mainFont numberItemDetail'> ${item.price}</span></p>
                        <span style={{fontSize: "30px"}} className='mainFont numberItemDetail'> ¡NO HAY STOCK!</span>
                    {
                        item.stock === 0 || itemCount !== 0
                        ?
                        <div className='containerBtnsIndexCart d-flex gap-3'>
                        <Link to='/'><button style={{width: "336px"}} className='buttonCustom buttonItemAdded backgroundMainColor'><span>Ir al inicio</span></button></Link>
                        </div>
                        : <ItemCount onAdd={onAdd} stock={item.stock} initial={item.stock === 0 ? 0 :1}/>
                    }
                    </div>
                </div>
            :
            <div className='productDetail'>
                <img src={item.img} alt={item.name} />
                <div className='containerInfo'>
                    <p className='nameItemDetail'>{item.name}</p>
                    <p className='descItemDetail secondaryFont'>{item.description}</p>
                    <p className='secondaryFont'>Precio:<span className='mainFont numberItemDetail'> ${item.price}</span></p>
                    <p className='secondaryFont'>Stock:<span className='mainFont numberItemDetail'> {item.stock} {item.stock>1?'Uds.' :'Ud.'}</span></p>
                {
                    item.stock === 0 || itemCount !== 0
                    ?
                    <div className='containerBtnsIndexCart d-flex gap-3'>
                    <Link to='/'><button className='buttonCustom buttonItemAdded backgroundMainColor'><span>Ir al inicio</span></button></Link>
                    <Link to='/cart'><button className='buttonCustom buttonItemAdded backgroundMainColor'><span>Ir al carrito</span></button></Link>
                    </div>
                    : <ItemCount onAdd={onAdd} stock={item.stock} initial={item.stock === 0 ? 0 :1}/>
                }
                </div>
            </div>
            : <Loader/>
            }
        </>
    );
}