import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ title, price, id, cantidad}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="lista_carrito container text-center text-white d-flex align-item-center mt-2 ms-3 mb-5 bg-dark">
            <div className="row align-items-center">
                <div className="col">
                    <h2 className="p-2  d-flex align-items-center justify-content-center col">{title}</h2>
                </div>
                <div className="col">
                    <p className="p-2 d-flex align-items-baseline justify-content-center col">Cantidad: {cantidad}</p>
                </div>
                <div className="col">
                    <p className="p-2 col">Subtotal: {price * cantidad}</p>
                </div>
                <div className="col">
                    <button onClick={() => removeItem(id)} className="btn btn-danger col">Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;