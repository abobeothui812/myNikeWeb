import React from 'react'
import { products } from '../constant/index'
import Productcards from './Productcards'
const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
      <p className='font-montserrat lg:max-w-lg  mt-2 text-slate-gray'>
        Experience top-notch quality and style with our sought-after <br />
        selections.Discover a world of comfort,desgin and value
      </p>


    <div className='mt-16 grid lg:grid-cols-4 gap-14 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 '>
      {products.map((product,index) => (
        <div key={index}>
           <Productcards key={product.name} {...product}/>
        </div>
      ))}
    </div>  
    </div>
    </section>
    
  )
}

export default PopularProducts