import cart from "../img/shop-cart.png";

const CartWidget = () =>{
    return (
        <div>
            <div>
                <img src={cart} alt="cart-widget" className=" column is-half"/>
                <p className="column">0</p>
            </div>
            
        </div>
    )
}

export default CartWidget;