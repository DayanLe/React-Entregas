
import { Link } from "react-router-dom";


const Item = ({ id, title, image, price, stock }) => {
    return (
        <article className="grilla">
            <div className="galeria">
                <header className="header_card_principal">
                    <h2>
                        {title}
                    </h2>
                </header>


                <picture>
                    <img src={image} alt={title} />
                </picture>
                <section className="section_principal">
                    <p>
                        Precio: ETH {price}
                    </p>
                    <p>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer>
                    <Link to={`/item/${id}`} className="btn btn-info">Ver Detalle</Link>
                </footer>
            </div>
        </article>
    )
}

export default Item;