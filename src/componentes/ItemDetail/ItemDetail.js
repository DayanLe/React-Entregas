import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, title, image, category, description, price, stock}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const item = {
            id, title, price
        }

        addItem(item, cantidad)
    }

    return(
        <article>
            <header className="card_header">
                <h2>{title}</h2>
            </header>
            <picture className="picture.image">
                <img src={image} alt={title}/>
            </picture>
            <section className="section_categoria">
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: ETH {price}
                </p>
            </section>
            <footer>
                {
                    cantidadAgregada > 0 ? (
                        <Link to='/cart' className="Option btn btn-success">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail