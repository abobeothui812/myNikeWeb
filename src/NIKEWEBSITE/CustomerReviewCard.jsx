import React from 'react'
import { star } from '../assets/icons'

const CustomerReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center  '>
        <img src={imgURL} width={120} height={120} alt="Picture of customers" className='rounded-full object-contain' />
        <p className='info-text text-center mt-6 max-w-sm'>{feedback}</p>
        <p className='flex gap-3 mt-3 info-text'><img src={star} width={24} height={24} alt="" /> ({rating})</p>
        <p className='font-bold mt-1 font-montserrat text-3xl'>{customerName}</p>
    </div>
  )
}

export default CustomerReviewCard