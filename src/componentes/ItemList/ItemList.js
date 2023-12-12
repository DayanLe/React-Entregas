import Item from "../Item/Item"

const ItemList = ({products}) => {
    console.log("Productos en ItemList:", products);
    return(
        <div>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;