import React, { useEffect, useState } from 'react'
import { CartContext } from './Contexts'
import { getCarts } from '../utilities'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const storedCart = getCarts()
  useEffect(() => {
    setCart(storedCart)
  }, [storedCart.length])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider