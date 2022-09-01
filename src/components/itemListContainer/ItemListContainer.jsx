export const ItemListContainer = (item) => {
    return (
        <div>
            <span>{item.name}</span>
            <br />
            <span>${item.price}</span>
            <br />
            <img src={item.img} width="200px" height="200px" alt="" />
            <hr />
        </div>
    )
}