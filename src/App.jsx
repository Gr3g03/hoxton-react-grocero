import { useState } from 'react';
import intitialProducts from './products'

import './App.css'
import Header from './Components/Header/Heder'
import Main from './Components/Main/Main'


function App() {

  const [products, setProducts] = useState(intitialProducts)
  const [cartList, setCartLiset] = useState([])



  function getCartItems() {
    return products.filter(item => item.amountInCart > 0)
  }




  function getTotal() {
    let total = 0

    const cart = getCartItems()

    for (const item of cart) {
      total += item.price * item.amountInCart
    }

    return total
  }

  function addItemToCart(item) {
    if (item.stock > 0) {
      item.stock--
      item.amountInCart++
    }
  }

  function removeItemFromCart(item) {
    if (item.amountInCart > 0) {
      item.amountInCart--
      item.stock++
    }
  }


  return (
    <div className="App">
      <Header
        // addZeros={addZeros}
        products={products}
      />
      <Main />

    </div>
  )
}

export default App
