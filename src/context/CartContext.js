import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, cantidad) => {

        const existingItems = cart.find(prod => prod.id === item.id)

        if(existingItems) {
            setCart(cart.map(prod =>
                prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad} : prod));
            
        } else {
            
            setCart(prev => [...prev, {...item, cantidad}])
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

  /*   const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    } */

    const totalCantidad = cart.reduce((total, currentItem) => total + currentItem.cantidad, 0);

    const total_eth = cart.reduce((total, currentItem) => total + currentItem.cantidad, 0);

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalCantidad}}>
            {children}
        </CartContext.Provider>
    )

    /* const addItem = (item, cantidad) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, cantidad}])
        } else {
            const updatedCart = cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                }
                return prod;
            });
            setCart(updatedCart);
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalCantidad}}>
            {children}
        </CartContext.Provider>
    ) */
}