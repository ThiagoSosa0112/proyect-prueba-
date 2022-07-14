import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'

const Cart = () => {
  const {cart} = useContext(Shop);

  console.log(cart);
  return (
    <ul>
      {cart.map(product => {
        return <li key={product.id}>{product.title} <img src={product.image} width='80px' alt={product.title}/></li>
      })}
    </ul>
  )
}

export default Cart