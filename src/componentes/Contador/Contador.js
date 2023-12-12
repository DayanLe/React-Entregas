import { useState } from "react";

const Contador = ({stock , initial, onAdd}) => {
    const [cantidad , setCantidad] = useState(initial)

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const restar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }

    return (
        <div>
            <div>
                <button onClick={restar}>-</button>
                <h4>{cantidad}</h4>
                <button onClick={sumar}>+</button>
            </div>

            <div>
                <button onClick={() => onAdd(cantidad)} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Contador;