import React from 'react'
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className='text-white mt-[-96px] max-w-[800px] w-full h-screen mx-auto font-bold flex flex-col justify-center items-center gap-8'>
        <p className='text-[#00df9a] text-sm md:text-lg'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-4xl md:text-5xl'>Grow with Data</h1>
        <div className='flex flex-col md:flex-row justify-center items-center py-2'>
            <p className='text-3xl md:text-4xl'>Fast, flexible financing for</p>
            <ReactTyped className='text-3xl md:text-4xl text-gray-500 pl-4'
      strings={[
        "BTB",
        "BTC",
        "SASS",
      ]}
      typeSpeed={120}
      backSpeed={140}
      loop
    />
        </div>
        <p className='text-xl md:text-2xl text-center text-gray-500 pl-4'>Monitor yout data analytics to increase revenue for BTB,BTC,& SASS platforms.</p>
        <button className='bg-[#00df9a] px-6 rounded-md w-48 py-4 text-xl text-[#000300]'>Get Started</button> 
    </div>
  )
}
