import React from 'react'

export const Newsletter = () => {
  return (
    <div className='text-white my-16 '>
        <div className='max-w-[1280px] p-4 w-full mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 text-center md:text-start'>
                <h1 className='font-bold text-2xl py-6 sm:text-3xl md:text-4xl'>Want tips & Tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>

            </div>
            <div className='flex flex-col gap-4 mt-6'>
                <div className='flex  items-center md:flex-row flex-col gap-4'>
                    <input type="text" placeholder='Enter your email' className='px-6 rounded-md text-[#000300] w-full md:w-64 py-4 text-xl ' />
                    <button className='bg-[#00df9a] px-6 rounded-md w-48 py-4 text-xl text-[#000300]'>Notify me</button> 
                </div>
                <div className='text-center md:text-start'>
                    <p>We care about the protection of yout data.Read our <span className='text-[#00df9a] underline'>Privacy Policy,</span></p>
                </div>
            </div>

        </div>

    </div>
  )
}
