import { Item } from '../item/Item'
import { Loader } from '../loader/Loader'

export const ItemList = ({products}) => {
    return (
        <>
        {
            products.length > 0
            ?
            products.map(item => <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} id={item.id}/>)
            : <Loader/>
        }
        </>
    )
}