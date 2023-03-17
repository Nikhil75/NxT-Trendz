import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="making-flex-end">
            <p className="order-total-value">
              Order Total: <span className="span">Rs {total}/-</span>
            </p>
            <p className="carlist-items-count">
              {cartList.length} items in cart
            </p>
            <button className="checkout" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

// let total = 0
//       cartList.forEach(eachCartItem => {
//         total += eachCartItem.price * eachCartItem.quantity
//       })
