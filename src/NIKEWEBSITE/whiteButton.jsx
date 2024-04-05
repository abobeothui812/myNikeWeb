import React from 'react'
const WhiteButton = ({label,iconUrl}) => {
  return (
    <button className='gap-2 flex justify-center
     items-center text-coral-red py-4 font-montserrat text-lg
     px-7 rounded-full leading-none border-coral-red border-2
     hover:scale-125 transition duration-500 ease-in-out'>{label}  
     {iconUrl && <img className="ml-2 w-5 h-5 rounded-full "src={iconUrl} alt="" />} </button>
  )
}

export default WhiteButton