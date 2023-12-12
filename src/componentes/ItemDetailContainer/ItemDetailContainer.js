import { useState, useEffect } from "react"
import { getProductById } from "../../async-mocks";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {

        const numericItemId = Number(itemId);

        getProductById(numericItemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId]);

   if (!product) {
        return <div>Cargando...</div>; 
    } 

    return (
        <div className="bg-white card_ver_detalles">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer