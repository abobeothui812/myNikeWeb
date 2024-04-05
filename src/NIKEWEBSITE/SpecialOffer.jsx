import React from 'react'
import Button from './Button'
import WhiteButton from './whiteButton'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' alt="" />
      </div>
      <div className='flex flex-1 flex-col'>
      <h2 className='capitalize text-4xl font-palanquin font-bold lg:max-w-lg'><span className='text-coral-red'>special</span> offer</h2>
      <p className='info-text mt-4 lg:max-lg '>Embark on a shopping journey that redefines your experience with undeatbale deals.From premier selections to incredible
        savings we offer unparalleld value that sets us apart.
        <br /><br />
        Navigate  realm of possibilities designed to fullfill your unique desires,surpassing the loftiest expectations.Your journey with
        us is nothing short of exceptional.
      </p>
      <div className=' gap-4 mt-11 flex flex-wrap'> 
        <Button label={"Shop now"} iconUrl={arrowRight}></Button>
        <WhiteButton label={"Learn more"}></WhiteButton>
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer