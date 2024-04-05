import React from 'react'
import { star } from '../assets/icons'
const Productcards = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full  ' >
        <img src={imgURL}   alt="a picture of shoe"  
        className='w-[280px] h-[280px]'/>
        <div className='mt-8 flex justify-start text-xl leading-normal gap-2.5'> <img src={star} alt="" width={24} height={24} />
        <p className='text-slate-gray font-montserrat'>(4.5)</p></div>
        <p className='font-bold font-montserrat mt-2 text-2xl leading-normal'>{name}</p>
        <p className='text-coral-red font-semibold font-montserrat mt-2 text-xl leading-normal'>{price}</p>
    </div>
  )
}

export default Productcards