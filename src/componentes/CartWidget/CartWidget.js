import { HiOutlineShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)

    return (
        <Link to="/cart" className="CartWidget">
            <div className="text-white px-3 pt-2">
            <HiOutlineShoppingCart/>
            {totalCantidad}
        </div>
        </Link>
        /* <div className="text-white px-3 pt-2">
            <HiOutlineShoppingCart/>
            0
        </div> */
    )
}

export default CartWidget;