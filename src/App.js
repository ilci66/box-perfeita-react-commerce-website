import React from 'react';
import { useState, useEffect } from 'react';
import { Products, Navbar } from './Components'; 
// import everything here

const App = () => {
  const [ shoppingCart, setShoppingCart ] = React.useState([])
  let stuff = []
  const handleAddToCart = (productname) => {
    stuff.push(productname)
    setShoppingCart(stuff)
  }
  return (
    <div id="app" >
      <Navbar shoppingCart={shoppingCart} />
      <Products onAddToCart={handleAddToCart}/>
    </div>
  )
}

export default App
