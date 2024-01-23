import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../async-mocks";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();
    console.log("Categoría seleccionada:", categoryId);

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    
        const fetchData = async () => {
            try {
                let category = categoryId ? categoryId.toString() : null;
                const response = category ? await getProductsByCategory(category) : await getProducts();
                setProducts(response);
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        };

        fetchData();

    }, [categoryId])

    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;