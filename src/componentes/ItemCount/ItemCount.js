import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)

    const suma = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const resta = () => {
        if(cantidad >1) {
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className="contenedor_card_botones">
            <div className="padre_suma_y_resta d-flex">
                <button onClick={resta} className="btn btn-dark btn_resta">-</button>
                <h4 className="numero">{cantidad}</h4>
                <button onClick={suma} className="btn btn-dark btn_suma">+</button>
            </div>
            <div>
                <button onClick={() => onAdd(cantidad)} disabled={!stock} className="btn_agregar_al_carrito btn btn-info">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;