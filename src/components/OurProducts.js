import React from 'react'
import Product from './ProductContainer'
import '../css/dist.css'

function OurProducts() {
    return (
        <div className="product">
            <h1 className='product-title'>המוצרים שלנו</h1>
          <div className='flex flex-row items-center justify-around relative top-36'>
                <div className='w-64 h-64 border-solid border-2 border-indigo-200 rounded-md shadow-md'><Product/></div>
                <div className='w-64 h-64 border-solid border-2 border-indigo-200 rounded-md shadow-md'><Product/></div>
                <div className='w-64 h-64 border-solid border-2 border-indigo-200 rounded-md shadow-md'><Product/></div>

          </div>
        </div>
    )
}

export default OurProducts
