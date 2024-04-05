import React from 'react'
import ServicesCard from './ServicesCard'
import { services } from '../constant'
const Services = () => {
  return (
    <section className=' max-container flex justify-center flex-wrap gap-9 '>
      {services.map((service) => (
        <ServicesCard key={service.label} {...service}></ServicesCard>
      ))}
    </section>
  )
}

export default Services