import React from 'react'
import Navbar from "../../components/Navbar";
import Hero from './Hero'
import Footer from '../../components/Footer'
import Cart from './Cart';

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cart />
      <Footer />
    </div>
  )
}

export default CartPage
