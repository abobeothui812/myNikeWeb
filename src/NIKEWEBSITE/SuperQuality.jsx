import React from 'react'
import { shoe8 } from '../assets/images'
import Button from './Button'
const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10
    w-full max-container'>
    <div className='flex flex-col flex-1'>
    <h2 className='text-4xl font-palanquin font-bold capitalize lg:max-w-lg'>we provide you <span className='text-coral-red'>super <br /> quality</span> shoes</h2>
    <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style,our meticulously <br />
    crafted footwear is designed to elevte your experience, 
    providing you with unmatchde quality,innovation,and a 
    touch of elegance.
    <br /><br />
    Our deditcation to detail and excellence ensures your <br />
    satisfaction.</p>
    <div className='mt-11'>
    <Button label="View details" ></Button>
    </div>
    
    </div>
    <div className='flex-1 flex justify-center items-center'>
    <img src={shoe8} alt="" className='float-right' width={570} height={520} />
    </div>
    </section>
  )
}

export default SuperQuality