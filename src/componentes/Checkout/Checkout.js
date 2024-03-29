import { useState } from "react";
import { Timestamp, WriteBatch, addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = WriteBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids )))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodCantidad = productAddedToCart?.prodCantidad
                if(stockDb >= prodCantidad) {
                    batch.update(doc.ref, {stock: stockDb - prodCantidad})
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0 ){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.error('Hay productos agotados')
            }
        } catch (error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    if(loading){
        return<h1>Se esta generando su orden...</h1>
    }

    if(orderId){
        return<h1>El codigo de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout;