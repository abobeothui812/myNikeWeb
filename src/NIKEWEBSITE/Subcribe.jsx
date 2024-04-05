import React from 'react'
import Button from './Button'
const Subcribe = () => {
  return (
    <section id='contact-us'
    className='max-container justify-between items-center flex max-lg:flex-col gap-6'>
      <h3 className='font-palanquin font-bold text-4xl leading-[68px] lg:max-w-md'>
        Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h3>

      <div className='lg:max-w-[40%] w-full flex items-center
      max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='subcribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'><Button label={"Sign Up"} fullWidth></Button></div>
      </div>
    </section>
  )
}

export default Subcribe