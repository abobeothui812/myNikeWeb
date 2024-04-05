import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import {navLinks} from '../constant/index';
import React,{ useState } from 'react';

const NAV = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container gap-16'>
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className={"gap-16 flex flex-1 justify-center items-center max-lg:hidden"}>
          {navLinks.map(item => (
            <li key={item.label} className='hover:scale-150 transition duration-500 ease-in-out'>
              <a className="font-montserrat leading-normal text-sm text-slate-gray" href={item.href}>{item.label}</a>
            </li>
          ))}
          <li className='hover:scale-150 transition duration-500 ease-in-out font-montserrat leading-normal text-sm'><a href="">Sign in / Explore now</a></li>
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} width={25} height={25} className='cursor-pointer' alt="" />
        </div>
        
      </nav>
    </header>
  )
}

export default NAV