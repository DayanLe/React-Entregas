import { useState, useEffect } from "react"
/* import { getProductById } from "../../async-mocks"; */
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const { itemId } = useParams()

        useEffect(() => {
            setLoading(true)

            const docRef = doc(db, 'products', itemId)

            getDoc(docRef)
                .then(response => {
                    const data = response.data()
                    const productAdapted = { id: response.id, ...data }
                    setProduct(productAdapted)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        })

        /* const numericItemId = Number(itemId);

        getProductById(numericItemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            }) */
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