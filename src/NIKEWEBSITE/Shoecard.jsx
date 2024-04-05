import React from 'react'

const Shoecard = ({imgUrl,changeBigShoeImage,bigShoeImage}) => {
  
  const handleClick = () =>{
        if(bigShoeImage !== imgUrl.bigShoe)

        changeBigShoeImage(imgUrl.bigShoe)
    }

  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cusor-pointer
    max-sm:flex-1 `} onClick={handleClick}>

        <div className='flex justify-center items-center bg-card bg-center bg-cover
        sm:h-40 sm:w-40  rounded-xl max-sm:p-4 hover:scale-125 transition duration-500 ease-in-out cursor-pointer'>
            <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103.34} 
            className='object-contain'/>
        </div>
    </div>
    
  )
}

export default Shoecard