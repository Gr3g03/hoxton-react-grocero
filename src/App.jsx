import { useState } from 'react';
import intitialProducts from './products'

import './App.css'



function App() {

  const [products, setProducts] = useState(intitialProducts)
  const [cartList, setCartLiset] = useState([])
  const [count, setCount] = useState(0)



  function addItemToCart(item) {
    item + 1
    setCartLiset(getCartItems())
  }

  function removeItemFromCart(item) {
    item - 1
    setCartLiset(getCartItems())
  }

  function getCartItems() {
    let updatedGroceries = products.filter(item => item.amountInCart > 0)
    return updatedGroceries
  }


  function getTotal() {
    let total = 0

    const cart = getCartItems()

    for (const item of cart) {
      total += item.price * item.amountInCart
    }

    return total
  }






  return (
    <div className="App">
      <header id="store" >
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">

          {
            products.map(item =>
              <li>
                <div className="store--item-icon">
                  <img src={`./src/assets/icons/${item.id.toString().padStart(3, 0)}-${item.name}.svg`} alt={item.name} />
                </div>
                <button onClick={() => getCartItems()}>Add to cart</button>
              </li>
            )}
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {getCartItems().map(item =>
              <li>
                <img src={`./src/assets/icons/${item.id.toString().padStart(3, 0)}-${item.name}.svg`}
                  alt={item.name} />
                <p>{item.name}</p>
                <button className="quantity-btn remove-btn center" onClick={removeItemFromCart}>-</button>
                <span className="quantity-text center">1</span>
                <button className="quantity-btn add-btn center"
                  onClick={addItemToCart}>+</button>
              </li>
            )}
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>

    </div>
  )
}

export default App
