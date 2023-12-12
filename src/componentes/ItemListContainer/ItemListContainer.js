import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../async-mocks";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    console.log("Categoría seleccionada:", categoryId);

    useEffect(() => {
    
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