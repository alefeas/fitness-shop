import { Item } from '../item/Item'

export const ItemList = ({products}) => {
    return (
        <>
        {
            products.length > 0
            ?
            products.map(item => <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock}/>)
            : <p>Cargando...</p>
        }
        </>
    )
}