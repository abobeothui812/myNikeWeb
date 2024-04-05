import React from 'react'
import Button from './Button';
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constant';
import { bigShoe1 } from '../assets/images';
import { useState } from 'react'
import Shoecard from './Shoecard';
const HERO = () => {
  const [bigShoeImg,setBigshoeImg] = useState(bigShoe1);

  return(
    <section id="home" className='w-full flex xl:flex-row flex-col min-h-screen  gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p className='font-montserrat  text-xl text-coral-red'>Our Summer collections</p>
      <h1 className='text-8xl mt-10 font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
      <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
      <br />
      <span className='text-coral-red inline-block mt-3 '>Nike</span> Shoes
      </h1>
      <p className='font-montserrat leading-8  mt-6 mb-14 text-lg text-slate-gray sm:max-w-sm'>Discover stylish Nike Arrivals,quality 
        comfort, and innovation for your active life.
      </p>
      <Button label="Shop now" iconUrl={arrowRight}></Button>
      
      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {
          statistics.map((start,index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{start.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{start.label}</p>
            </div>

          ))
        }
      </div>
      </div>

      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-centre' >
        <img src={bigShoeImg} alt="a big shoe" width={610} height={500} className='relative object-contain z-10'/>

        <div className=' flex sm:gap-8 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 gap-4'>
            {shoes.map((image,index) => (
              <div key={index}>
                <Shoecard imgUrl={image} changeBigShoeImage={(shoe) => setBigshoeImg(shoe)} bigShoeImg={bigShoeImg}>
                </Shoecard>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HERO