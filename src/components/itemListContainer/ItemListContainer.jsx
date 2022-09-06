import { ItemCount } from "../itemCount/ItemCount"

export const ItemListContainer = (item) => {
    return (
        <>
            <span>{item.name}</span>
            <br />
            <span>${item.price}</span>
            <br />
            <img src={item.img} width="200px" height="200px" alt="" />
            <ItemCount stock={item.stock} initial={1}/>
            <hr />
        </>
    )
}