import React from 'react'
import CustomerReviewCard from './CustomerReviewCard'
import { reviews } from '../constant'
const CustomerReview = () => {
  return (
    <section className='max-container'>
        <h2 className='text-4xl font-bold font-palanquin text-center'>What Our <span className='text-coral-red'>Customers</span> Say?</h2>
        <p className='info-text m-auto mt-4 text-center max-w-lg'>Hear genuine stories from our satisfied customers about their
          exceptional experiences with us
        </p>
        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews.map((review) => (
            <CustomerReviewCard key={review.customerName} {...review}></CustomerReviewCard>
          ))}
        </div>
    </section>
  )
}

export default CustomerReview