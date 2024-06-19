import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartTable from './CartTable'
import Hero from './Hero'


const HistoryPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CartTable />

      <Footer />
      
    </div>
  )
}

export default HistoryPage

