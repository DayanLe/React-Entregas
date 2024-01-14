import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalCantidad, total } = useContext(CartContext)

    if (totalCantidad === 0) {
        return (
            <div className="d-flex justify-content-center m-5">
                <div className="noHayProductos">
                    <h1 className="text-white">No hay productos en el carrito</h1>
                    <Link to='/' className="btn btn-info my-2 productos d-flex justify-content-center text-align-center">Productos</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3 className="text-white">Total: ETH{total}</h3>
            <button onClick={() => clearCart()} className="btn btn-info">Limpiar carrito</button>
            <Link to="/checkout" className="btn btn-success">Checkout</Link>
        </div>
    )
}

export default Cart;