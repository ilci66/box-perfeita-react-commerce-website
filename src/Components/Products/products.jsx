import React from 'react'
import Product from './Product/Product';
import productList from './ProductList';

const Products = () => {

  return (
    <div>
      {/* {productList.map(ele =>
        <p>
          {ele.name}<p>bootstrap button</p>
        </p>)} */}

      <h2>these be my products </h2>
      {productList.map(product => 
        <Product product={product} />
      )}

    </div>
  )
}

export default Products
