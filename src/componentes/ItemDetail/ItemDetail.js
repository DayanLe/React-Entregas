import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, title, image, category, description, price, stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log("Cantidad agregada")}/>
            </footer>
        </article>
    )
}

export default ItemDetail