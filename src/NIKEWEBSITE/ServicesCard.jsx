import React from 'react'

const ServicesCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16
      rounded-[20px] shadow-3xl flex-col'>
        <div className=' flex w-11 h-11 justify-center items-center bg-coral-red rounded-full'><img src={imgURL} width={24} height={24} alt={label} /></div>
        <h3 className='font-palanquin text-3xl font-bold mt-5 leading-normal'>{label}</h3>
        <p className='info-text mt-3 break-words'>{subtext}</p>
    </div>
  )
}

export default ServicesCard