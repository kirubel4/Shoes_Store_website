// import Card from "./Card";
import CartItem from "./CartItem";
function Cart({cartItems,onClickTrash}){
    return (
        <>
        <h2 className="dark:text-white text-4xl font-bold mb-4">cart</h2>
        <ul>
                {cartItems.map(cartItem => (
                    <li key={cartItem.product.id}>
                        <CartItem item={cartItem} onClickTrash={onClickTrash}/>
                    </li>
                   
                ))}
            </ul>
            { console.log(cartItems)}
        </>
    )
}
export default Cart;