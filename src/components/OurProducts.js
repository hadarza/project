import React from 'react'
import Product from './ProductContainer'
import '../css/dist.css'

function OurProducts() {
    return (
        <div className="product">
            <h1 className='product-title'>המוצרים שלנו</h1>
          <div className='grid grid-cols-4 absolute top-32'>
              <Product/>
              <Product/>
              <Product/>
              <Product/>

          </div>
        </div>
    )
}

export default OurProducts
